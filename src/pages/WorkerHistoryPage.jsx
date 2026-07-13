import { workers } from "../data/data";
import StatsCard from "../components/StatsCard";
import MapComplianceGraph from "../components/MapComplianceGraph";
import "./workerhistorypage.css";
import BiometricsGraph from "../components/BiometricsGraph";
import WorkerIncidentTable from "../components/WorkerIncidentTable";

export default function WorkerHistoryPage() {
  const worker = workers[0];

  return (
    <div className="worker-history-page-container">
      <section className="worker-history-header">
        <div className="worker-header-information-container">
          <div className="worker-header-profile">
            <div className="worker-avatar">
              <span>👷‍♂️</span>
            </div>

            <div className="worker-header-text-information">
              <h3>{worker.name}</h3>
              <p>
                {worker.role} &#183; {worker.site} &#183; {worker.zone} &#183;{" "}
                {worker.id}
              </p>
            </div>
          </div>
          <div className="worker-header-stats-container">
            <StatsCard
              text={"Μέση συμμόρφωση"}
              value={"88%"}
              color={"var(--status-ok)"}
            />
            <StatsCard
              text={"Παραβάσεις (30μ)"}
              value={"14"}
              color={"var(--status-high)"}
            />
            <StatsCard
              text={"Περιστατικά"}
              value={"2"}
              color={"var(--status-critical)"}
            />
            <StatsCard
              text={"Μ.Ο παλμών"}
              value={"91bpm"}
              color={"var(--primary-dark)"}
            />
          </div>
        </div>
      </section>
      <section className="worker-history-graphs-container">
        <div className="map-compliance-graph-container">
          <h2 className="dashboard-titles">
            Συμμόρφωση ΜΑΠ - τελευταίες 30 ημέρες
          </h2>
          <MapComplianceGraph />
        </div>
        <div className="biometric-graph-container">
          <h2 className="dashboard-titles">Βιομετρικά - παλμόι & κόπωση</h2>
          <BiometricsGraph />
        </div>
      </section>
      <section className="worker-history-events-container">
        <h2 className="dashboard-titles">Ιστορικό περιστατικών & παραβάσεων</h2>
        <WorkerIncidentTable />
      </section>
    </div>
  );
}
