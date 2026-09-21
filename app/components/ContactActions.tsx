"use client";
import { useState } from "react";
import { profile } from "../data/portfolio";
import { Icon } from "./ui";
export default function ContactActions() {
  const [copied, setCopied] = useState("");
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied("Email copied to clipboard.");
    } catch {
      setCopied("Select the email address to copy it, or open your email app.");
    }
  }
  return (
    <div className="email-block">
      <div className="email-row">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        <button onClick={copy} aria-label="Copy email address">
          <Icon name={copied.startsWith("Email copied") ? "check" : "copy"} />
        </button>
      </div>
      <span className="copy-status" role="status">
        {copied}
      </span>
    </div>
  );
}
