import { pageMetadata } from "../data/site";
import Link from "next/link";
import CertificationsClient from "./CertificationsClient";
export const metadata = pageMetadata("/certifications");
export default function Certifications() {
  return (
    <div className="page-container container">
      <div className="page-header">
        <Link href="/#about">← Back to the portfolio</Link>
        <div className="eyebrow">CONTINUOUSLY LEARNING</div>
        <h1>Curiosity, with credentials.</h1>
        <p>
          Learning across disciplines, from machine learning and data science to
          software development. Explore the certificates and achievements behind
          the work.
        </p>
      </div>
      <CertificationsClient />
    </div>
  );
}
