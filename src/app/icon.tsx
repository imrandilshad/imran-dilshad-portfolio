import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        background: "#070a12",
        border: "4px solid #22d3ee",
        color: "#22d3ee",
        fontSize: 30,
        fontWeight: 700,
        fontFamily: "monospace",
      }}
    >
      ID
    </div>,
    size,
  );
}
