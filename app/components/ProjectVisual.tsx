import { Icon } from "./ui";
export default function ProjectVisual({
  kind,
}: {
  kind: "arc" | "commerce" | "mobile";
}) {
  return (
    <div
      className={`project-visual visual-${kind}`}
      aria-label={
        kind === "arc"
          ? "Concept diagram of a puzzle interaction and activity tracking"
          : kind === "commerce"
            ? "Concept diagram of the commerce workflow"
            : "Concept diagram of a laundry booking workflow"
      }
      role="img"
    >
      <div className="visual-caption">
        <span className="tiny-square" />{" "}
        {kind === "arc"
          ? "INTERACTIVE INTELLIGENCE"
          : kind === "commerce"
            ? "COMMERCE, CONNECTED"
            : "SERVICE, SIMPLIFIED"}{" "}
        <Icon name="external" />
      </div>
      {kind === "arc" ? (
        <div className="puzzle-concept">
          <div className="puzzle-window">
            <div className="window-top">
              <span />
              <span />
              <span />
              <b>arc / playground</b>
            </div>
            <div className="puzzle-grid">
              {Array.from({ length: 36 }, (_, i) => (
                <i
                  key={i}
                  className={
                    [8, 9, 14, 15, 20, 21, 22, 26, 27, 28].includes(i)
                      ? "filled"
                      : [7, 13, 19, 25].includes(i)
                        ? "soft"
                        : ""
                  }
                />
              ))}
            </div>
            <div className="puzzle-bottom">
              <span>Observe. Interact. Explore.</span>
              <Icon name="nodes" />
            </div>
          </div>
          <div className="visual-note">
            <span className="status-dot" /> Interaction → activity tracking
          </div>
        </div>
      ) : kind === "commerce" ? (
        <div className="commerce-concept">
          <div className="commerce-header">
            <span>
              store<span className="brand-dot">front.</span>
            </span>
            <Icon name="database" />
          </div>
          <div className="commerce-products">
            {["Discover", "Choose", "Checkout"].map((s, i) => (
              <div key={s}>
                <div className={`product-object object-${i}`}>
                  <Icon name={["layers", "database", "check"][i]} />
                </div>
                <span>
                  0{i + 1} / {s}
                </span>
              </div>
            ))}
          </div>
          <div className="commerce-flow">
            Product catalog <span>→</span> Secure checkout <span>→</span> Order
            tracking
          </div>
        </div>
      ) : (
        <div className="mobile-concept">
          <div className="phone">
            <div className="phone-notch" />
            <div className="phone-brand">
              iWashHub<span>YOUR DAY, A LITTLE LIGHTER.</span>
            </div>
            <div className="wash-symbol">
              <Icon name="layers" />
            </div>
            <div className="phone-step">
              <span>01</span> Schedule pickup <Icon name="check" />
            </div>
            <div className="phone-step">
              <span>02</span> Track your order <Icon name="location" />
            </div>
            <div className="phone-cta">
              Laundry, taken care of. <span>↗</span>
            </div>
          </div>
          <div className="mobile-note">
            <Icon name="location" />
            <span>Pickup → care → delivery</span>
          </div>
        </div>
      )}
      <span className="concept-label">
        CONCEPT ILLUSTRATION · NOT A PRODUCT SCREENSHOT
      </span>
    </div>
  );
}
