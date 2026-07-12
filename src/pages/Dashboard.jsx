import KPICard from "../components/KPICard.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import RedDot from "../components/RedDot.jsx";
import Chip from "@mui/material/Chip";
import "./dashboard.css";
import Badge from "../components/Badge.jsx";
import WorkerTable from "../components/WorkerTable.jsx";
import WorkerDetails from "../components/WorkerDetails.jsx";
import Notifications from "../components/NotificationsList.jsx";

export default function Dashboard() {
  return (
    <>
      <div className="KPI-row">
        <KPICard title={"Εργαζόμενοι στο πεδίο"} value={"24"} badgeValue={1} />
        <KPICard
          title={"Συμμόρφωση ΜΑΠ"}
          value={"87%"}
          children={<ProgressBar value="87%" />}
        />
        <KPICard title={"Ενεργές ειδοποιήσεις"} value={"5"} />
        <KPICard title={"Critical"} value={"2"} children={<RedDot />} />
      </div>

      <div className="dashboard-layout">
        <main className="dashboard-main">
          <section className="dashboard-main-workers">
            <Badge value="2" />
            <h2 className="dashboard-titles">Εργαζόμενοι</h2>
            <div className="dashboard-main-workers-search-container">
              <input type="text" placeholder="🔍 Αναζήτηση ονόματος/ ζώνης" />
              <div className="dashboard-main-workers-chips-container">
                <Chip className="filter-chip" label="Όλοι" />
                <Chip
                  className="filter-chip"
                  label="Μη συμμορφ"
                  variant="outlined"
                />
                <Chip
                  className="filter-chip"
                  label="Zone A"
                  variant="outlined"
                />
              </div>
            </div>
            <WorkerTable />
          </section>

          <section className="dashboard-main-worker-details">
            <WorkerDetails />
          </section>
        </main>

        <aside className="dashboard-aside">
          <section className="dashboard-notifications-container">
            <Badge value={4} />
            <Notifications />
          </section>
        </aside>
      </div>
    </>
  );
}
