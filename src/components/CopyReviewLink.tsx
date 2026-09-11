"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

type CopyReviewLinkProps = {
  value: string;
  label?: string;
};

export default function CopyReviewLink({
  value,
  label = "Copy link",
}: CopyReviewLinkProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("textarea");
      input.value = value;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex min-h-[48px] min-w-[48px] items-center justify-center gap-2 rounded-md border-2 border-[#1C1917] px-6 py-3 font-semibold text-[#1C1917] transition-colors hover:bg-[#1C1917] hover:text-white"
      aria-label={copied ? "Link copied" : label}
    >
      {copied ? <Check className="h-5 w-5" aria-hidden /> : <Copy className="h-5 w-5" aria-hidden />}
      {copied ? "Copied!" : label}
    </button>
  );
}
