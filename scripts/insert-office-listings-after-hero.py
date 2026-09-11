#!/usr/bin/env python3
"""Place RealScoutListings immediately after each page hero; remove later duplicates."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path("/workspace/src/app")
IMPORT_LINE = 'import RealScoutListings from "@components/RealScoutListings";\n'
SKIP = {
    "signin/page.tsx",
    "signup/page.tsx",
    "error/page.tsx",
    "blog-details/page.tsx",
    "blog-sidebar/page.tsx",
    "floor-plans-simple/page.tsx",
}

WIDGET_RE = re.compile(
    r"\s*\{?/\*\s*RealScout[^*]*\*/\}?\s*\n\s*<RealScoutListings\b[^/]*/>\s*\n|"
    r"\s*<RealScoutListings\b[^/]*/>\s*\n",
    re.MULTILINE,
)


def rel(path: Path) -> str:
    return str(path.relative_to(ROOT))


def ensure_import(text: str) -> str:
    if "RealScoutListings" in text and "@components/RealScoutListings" in text:
        return text
    # Prefer after other @components imports
    m = list(re.finditer(r'^import .+ from ["\']@components/.+["\'];\s*\n', text, re.M))
    if m:
        last = m[-1]
        return text[: last.end()] + IMPORT_LINE + text[last.end() :]
    m = re.search(r'^import .+;\s*\n', text, re.M)
    if m:
        # after first import block — insert after last consecutive import
        lines = text.splitlines(keepends=True)
        insert_at = 0
        for i, line in enumerate(lines):
            if line.startswith("import ") or (
                insert_at and (line.startswith("import ") or line.strip() == "")
            ):
                if line.startswith("import "):
                    insert_at = i + 1
            elif insert_at:
                break
        lines.insert(insert_at, IMPORT_LINE)
        return "".join(lines)
    return IMPORT_LINE + text


def find_hero_end(text: str) -> int | None:
    """Return index after first hero closes (</Hero> or first dark hero </section>)."""
    # Homepage-style component
    m = re.search(r"<Hero\s*/>", text)
    if m:
        return m.end()

    # Comment-marked hero
    m = re.search(
        r"\{/\*\s*Hero(?:\s+Section)?\s*\*/\}[\s\S]*?</section>",
        text,
        re.IGNORECASE,
    )
    if m:
        return m.end()

    # First ink/dark hero section after <main
    main = re.search(r"<main\b[^>]*>", text)
    start = main.end() if main else 0
    section = re.search(
        r'<section\b[^>]*className="[^"]*(?:bg-\[#1C1917\]|bg-\[#141210\]|bg-black)[^"]*"[^>]*>',
        text[start:],
    )
    if not section:
        # any first section after main as fallback for odd heroes
        section = re.search(r"<section\b[^>]*>", text[start:])
        if not section:
            return None
    abs_start = start + section.start()
    # find matching close of this section (depth count)
    i = abs_start
    depth = 0
    while i < len(text):
        open_m = re.match(r"<section\b[^>]*>", text[i:])
        close_m = re.match(r"</section>", text[i:])
        if open_m:
            depth += 1
            i += open_m.end()
            continue
        if close_m:
            depth -= 1
            i += close_m.end()
            if depth == 0:
                return i
            continue
        i += 1
    return None


def default_heading(path: Path) -> str:
    slug = rel(path).replace("/page.tsx", "").replace("page.tsx", "home")
    if slug in ("", "."):
        return "Browse Homes for Sale in Sun City Summerlin | Las Vegas 55+ Community"
    label = slug.split("/")[-1].replace("-", " ").title()
    return f"Homes for Sale in Sun City Summerlin | {label}"


def process(path: Path) -> bool:
    if rel(path) in SKIP:
        return False
    original = path.read_text()
    text = original

    # Strip all existing RealScoutListings usages (we'll re-insert once after hero)
    text = WIDGET_RE.sub("\n", text)
    # Clean leftover blank comment-only leftovers
    text = re.sub(r"\n{3,}", "\n\n", text)

    hero_end = find_hero_end(text)
    if hero_end is None:
        print(f"SKIP (no hero): {rel(path)}")
        return False

    text = ensure_import(text)
    # Recompute hero_end after import may shift indices
    hero_end = find_hero_end(text)
    assert hero_end is not None

    widget = (
        f'\n\n        <RealScoutListings h2Text="{default_heading(path)}" />\n'
    )
    text = text[:hero_end] + widget + text[hero_end:]

    if text != original:
        path.write_text(text)
        print(f"UPDATED: {rel(path)}")
        return True
    print(f"unchanged: {rel(path)}")
    return False


def main() -> None:
    pages = sorted(ROOT.rglob("page.tsx"))
    changed = 0
    for page in pages:
        if process(page):
            changed += 1
    print(f"Done. Changed {changed}/{len(pages)} pages.")


if __name__ == "__main__":
    main()
