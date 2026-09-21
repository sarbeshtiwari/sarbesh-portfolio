"use client";
import { useState } from "react";
import { Icon } from "./ui";
const layers = [
  {
    label: "Intelligence",
    tag: "AI / MACHINE LEARNING",
    icon: "nodes",
    tech: "Python · TensorFlow · OpenCV",
    description:
      "Computer vision, emotion-aware experiences, and interactive AI gaming platforms.",
  },
  {
    label: "Experience",
    tag: "WEB / MOBILE",
    icon: "code",
    tech: "React · Next.js · Flutter",
    description:
      "Responsive web experiences and cross-platform mobile products.",
  },
  {
    label: "Foundation",
    tag: "SYSTEMS / CLOUD",
    icon: "layers",
    tech: "Node.js · AWS · Docker",
    description:
      "APIs, authentication, data storage, and production deployment.",
  },
];
export default function EngineeringMap() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="engineering-map">
      <div className="map-caption">
        <span className="tiny-square" /> THE ENGINEERING STACK{" "}
        <span>01—03</span>
      </div>
      <div className="map-orbit" aria-hidden="true">
        <span />
        <span />
        <span />
        <i>+</i>
      </div>
      <div className="stack-cards">
        {layers.map((layer, i) => (
          <button
            key={layer.label}
            className={`stack-card stack-${i} ${selected === i ? "selected" : ""}`}
            onClick={() => setSelected(i)}
            aria-pressed={selected === i}
            aria-controls="stack-description"
          >
            <span className="stack-icon">
              <Icon name={layer.icon} />
            </span>
            <span>
              <small>{layer.tag}</small>
              <strong>{layer.label}</strong>
              <span className="stack-tech">{layer.tech}</span>
            </span>
            <span className="stack-index">
              0{i + 1}
              <Icon name="external" />
            </span>
          </button>
        ))}
      </div>
      <div
        className="map-description"
        id="stack-description"
        aria-live="polite"
      >
        <span className="status-dot" />
        <p>{layers[selected].description}</p>
      </div>
      <div className="map-footer">
        <span>IDEA → INTELLIGENCE → PRODUCT</span>
        <span>✳</span>
      </div>
    </div>
  );
}
