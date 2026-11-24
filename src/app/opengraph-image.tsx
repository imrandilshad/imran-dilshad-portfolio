import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stack = ["React", "Next.js", "TypeScript", "Node.js", "Redux Toolkit"];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: "radial-gradient(circle at 80% 0%, #0e3a46 0%, #070a12 55%)",
        color: "#e7edf7",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            borderRadius: 14,
            border: "2px solid #22d3ee",
            color: "#22d3ee",
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          ID
        </div>
        <div style={{ fontSize: 26, color: "#9aa8bd" }}>{profile.location}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ fontSize: 34, color: "#22d3ee", letterSpacing: 1 }}>{profile.role}</div>
        <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -2, marginTop: 8 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 30, color: "#9aa8bd", marginTop: 16, maxWidth: 980 }}>
          {`${profile.yearsOfExperience} years building enterprise web apps, retail analytics, and AI-powered experiences.`}
        </div>
      </div>

      <div style={{ display: "flex", gap: 14 }}>
        {stack.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              padding: "10px 20px",
              borderRadius: 999,
              border: "1px solid rgba(148,163,184,0.3)",
              fontSize: 24,
              color: "#e7edf7",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>,
    size,
  );
}
