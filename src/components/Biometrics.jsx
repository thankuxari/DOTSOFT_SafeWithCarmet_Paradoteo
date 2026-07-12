import { workers } from "../data/data";
import "./biometrics.css";

export default function Biometrics() {
  return (
    <div className="biometrics-container">
      <div className="heartrate-container">
        <p className="biometrics-title">Βιομετρικά</p>
        <div className="heartrate-container-info">
          <p> ❤️ {workers[0].heartRate} bpm</p>
          <span>Κόπωση: {workers[0].fatigue}</span>
        </div>
      </div>
      <div className="device-container">
        <p className="biometrics-title">Συσκευή</p>
        <div className="device-container-info">
          <p> 🔋 {workers[0].battery}%</p>
          <span>Συνδεμένη</span>
        </div>
      </div>
      <p className="biometrics-title">Τάση Παλμών (τελευταία ώρα)</p>
    </div>
  );
}
