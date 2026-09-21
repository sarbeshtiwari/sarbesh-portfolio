import { ImageResponse } from "next/og";
export const alt = "Sarbesh Kumar Tiwari — AI/ML & Full-Stack Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        padding: "65px 80px",
        background: "#faf9f6",
        color: "#202329",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 26 }}
      >
        <span
          style={{
            display: "flex",
            background: "#202329",
            color: "#fff",
            borderRadius: 12,
            padding: "10px 17px",
          }}
        >
          st.
        </span>
        Sarbesh Kumar Tiwari
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 82, letterSpacing: -4, lineHeight: 1.08 }}>
          Engineering what's next.
        </span>
        <span style={{ fontSize: 25, color: "#6352cc", marginTop: 28 }}>
          AI / ML ENGINEER + FULL-STACK DEVELOPER
        </span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 21,
          color: "#62656e",
          borderTop: "1px solid #e5e3e8",
          paddingTop: 25,
        }}
      >
        Intelligent systems. Thoughtful experiences.
      </div>
    </div>,
    size,
  );
}
