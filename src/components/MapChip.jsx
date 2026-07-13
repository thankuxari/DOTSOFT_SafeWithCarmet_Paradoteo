import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function MapChip({ title, value }) {
  return (
    <Chip
      className="map-chip"
      label={
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          {title}
          <FontAwesomeIcon icon={value ? faCheck : faXmark} />
        </span>
      }
      sx={{
        padding: 2,
        backgroundColor: value
          ? "var(--status-ok-bg)"
          : "var(--status-critical-bg)",
        color: value ? "var(--status-ok)" : "var(--status-critical)",
        border: "1px solid currentColor",
        borderRadius: "var(--radius-sm)",
        fontWeight: 600,
        cursor: "pointer",
      }}
    />
  );
}
