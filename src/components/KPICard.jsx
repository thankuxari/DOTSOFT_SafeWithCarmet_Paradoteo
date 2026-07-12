import "./kpicard.css";
import Badge from "./Badge.jsx";


export default function KPICard({ title, value, children, badgeValue }) {

    return (
    <div className="KPI-card">
        {badgeValue && <Badge value={badgeValue} />}
        <p>{title}</p>
        <div className="KPI-card-information">
            <h5>{value}</h5>
            {children}
        </div>
    </div>
  );

}
