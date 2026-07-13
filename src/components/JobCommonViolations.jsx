import "./jobcommonviolations.css";

export default function JobCommonViolations({ title, content, color }) {
  return (
    <div className="job-common-violations-container">
      <h3>{title}</h3>
      <p style={{ color }}>{content}</p>
    </div>
  );
}
