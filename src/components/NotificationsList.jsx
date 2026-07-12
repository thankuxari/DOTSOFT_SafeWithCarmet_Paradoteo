import "./notificationslist.css";
import { alerts } from "../data/data";
import NotificationCard from "./NotificationCard.jsx";

export default function NotificationsList() {
  return (
    <div className="notifications-container">
      <div className="notifications-container-header">
        <h2 className="dashboard-titles">Ειδοποιήσεις</h2>
        <span className="notifications-alert-count-badge">
          2 Critical &#183; 3 High
        </span>
      </div>
      <div className="notifications-container-list">
        {alerts.map((alert) => (
          <NotificationCard
            severity={alert.severity}
            type={alert.type}
            message={alert.message}
            time={alert.time}
          />
        ))}
      </div>
    </div>
  );
}
