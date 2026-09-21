"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { certs } from "../data/certifications";
import { Icon } from "../components/ui";
export default function CertificationsClient() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof certs)[number] | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const images = selected
    ? [
        { image: selected.image, label: "Certificate" },
        ...selected.relatedImages,
      ]
    : [];
  const currentImage = images[imageIndex];
  const categories = ["All", ...new Set(certs.map((c) => c.category))];
  useEffect(() => {
    if (selected) dialog.current?.showModal();
    else dialog.current?.close();
  }, [selected]);
  return (
    <>
      <div className="filters" role="group" aria-label="Filter certifications">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            aria-pressed={filter === cat}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="cert-grid">
        {certs
          .filter((c) => filter === "All" || c.category === filter)
          .map((cert) => {
            const content = (
              <>
                <div className="cert-image">
                  <Image
                    src={cert.image}
                    alt={cert.name + " certificate"}
                    fill
                    sizes="(max-width: 640px) 46vw, (max-width: 900px) 44vw, 350px"
                  />
                </div>
                <div className="cert-info">
                  <span className="small-label">{cert.category}</span>
                  <h2>{cert.name}</h2>
                  <p>
                    {cert.issued}
                    {" · View certificate ↗"}
                    {cert.relatedImages.length > 0 &&
                      ` · ${cert.relatedImages.length + 1} images`}
                  </p>
                </div>
              </>
            );
            return (
              <article className="cert-card" key={cert.name}>
                <button
                  onClick={() => {
                    setImageIndex(0);
                    setSelected(cert);
                  }}
                  aria-label={`View ${cert.name} certificate`}
                >
                  {content}
                </button>
              </article>
            );
          })}
      </div>
      <dialog
        ref={dialog}
        className="cert-dialog"
        aria-labelledby="certificate-title"
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setSelected(null);
        }}
      >
        <div className="dialog-header">
          <h2 id="certificate-title">{selected?.name}</h2>
          <button
            onClick={() => setSelected(null)}
            aria-label="Close certificate"
          >
            <Icon name="close" />
          </button>
        </div>
        {images.length > 1 && (
          <div
            className="filters"
            role="group"
            aria-label="Certificate pages and badges"
          >
            {images.map((item, index) => (
              <button
                key={item.image}
                className={`filter-btn ${index === imageIndex ? "active" : ""}`}
                aria-pressed={index === imageIndex}
                onClick={() => setImageIndex(index)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
        {selected && currentImage && (
          <div className="dialog-image">
            <Image
              src={currentImage.image}
              alt={`${selected.name} — ${currentImage.label}`}
              fill
              sizes="850px"
            />
          </div>
        )}
      </dialog>
    </>
  );
}
