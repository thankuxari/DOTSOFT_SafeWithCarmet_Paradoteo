import { workers } from "../data/data.js";
import Badge from "./Badge.jsx";
import MapChip from "./MapChip.jsx";
import Biometrics from "./Biometrics.jsx";
import LineGraph from "./LineGraph.jsx";
import "./workersdetails.css";

export default function WorkerDetails() {
  return (
    <div className="workers-details-container">
      <Badge value="3" />
      <div className="worker-details-header">
        <h2 className="dashboard-titles">Λεπτομέριες: Γ. Παπαδόπουλος</h2>
        <p>Zone A &#183; Τεχνικός Πεδίου</p>
      </div>
      <div className="worker-details-live-information">
        <div className="map-live-details-container">
          <p>ΜΑΠ</p>
          <div className="map-live-details-chip-container">
            {Object.entries(workers[0].ppe).map(([title, value]) => (
              <MapChip key={title} title={title} value={value} />
            ))}
          </div>
          <div className="map-live-details-line-graph-container">
            <LineGraph />
          </div>
        </div>
        <div className="biometrics-live-details-container">
          <Biometrics />
        </div>
      </div>
    </div>
  );
}
