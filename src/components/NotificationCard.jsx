import "./notificationcard.css";

export default function Notification({ severity, type, message, time }) {
  return (
    <div
      className={`notification-card-container notification-card-${severity}`}
    >
      <div className="notification-card-header">
        <h4
          className={`notification-card-title notification-card-title-${severity}`}
        >
          {severity.toUpperCase()} &#183;{" "}
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h4>
      </div>
      <div className="notification-card-body">
        <p>{message}</p>
      </div>
      <div className="notification-card-footer">
        <p>{time}</p>
        <button>Ack</button>
      </div>
    </div>
  );
}
