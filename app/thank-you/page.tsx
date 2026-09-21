import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../components/ui";
export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};
export default function ThankYou() {
  return (
    <section className="thank-you">
      <Icon name="check" />
      <div className="eyebrow">CONVERSATION STARTED</div>
      <h1>Message received.</h1>
      <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
      <Link className="btn-primary" href="/">
        Back to the portfolio <Icon name="arrow" />
      </Link>
    </section>
  );
}
