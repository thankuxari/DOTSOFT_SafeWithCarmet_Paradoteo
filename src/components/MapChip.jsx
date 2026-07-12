import Chip from "@mui/material/Chip";
import "./mapchip.css";

export default function MapChip({ title, value }) {
  console.log(value);
  return (
    <Chip
      className="map-chip"
      label={title}
      sx={{
        padding: 2,
        backgroundColor: value
          ? "var(--status-ok-bg)"
          : "var(--status-critical-bg)",
        color: value ? "var(--status-ok)" : "var(--status-critical)",
        border: "1px solid currentColor",
        borderRadius: "var(--radius-sm)",
        fontWeight: 600,
      }}
    />
  );
}
