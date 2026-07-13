import "./statscard.css";

export default function StatsCard({ text, value, color }) {
  return (
    <div className="stats-card">
      <p>{text}</p>
      <span style={{ color }}>{value}</span>
    </div>
  );
}
