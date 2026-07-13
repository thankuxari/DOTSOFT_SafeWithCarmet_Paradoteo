import MapComplianceGraphPerJob from "../components/MapComplianceGraphPerJob";
import JobCommonViolations from "../components/JobCommonViolations";
import SummaryPerRoleTable from "../components/SummaryPerRoleTable";
import "./jobanalytics.css";

export default function JobAnalytics() {
  return (
    <div className="job-analytics-container">
      <div className="job-analytics-header-container">
        <h2 className="dashboard-titles">Ανάλυση ανά θέση εργασίας</h2>
      </div>
      <div className="job-analytics-layout">
        <section className="job-analytics-map-compliance-graph-container">
          <h2 className="dashboard-titles">Συμμόρφωση ΜΑΠ ανά ρόλο</h2>
          <MapComplianceGraphPerJob />
        </section>
        <section className="job-analytics-common-violations-container">
          <h2 className="dashboard-titles">Συχνότερες παραβάσεις ανα ρόλο</h2>
          <JobCommonViolations
            title={"Χειριστής γερανού"}
            content={"Λείπει ζώνη ασφαλείας ύψους (41%) · κράνος (22%)"}
            color={"#c0392b"}
          />
          <JobCommonViolations
            title={"Χειριστής κλαρκ"}
            content={"Γιλέκο υψηλής ορατότητας (38%) · ζώνες κίνησης"}
            color={"#d35400"}
          />
          <JobCommonViolations
            title={"Ηλεκτρολόγος"}
            content={"Μονωτικά γάντια (29%) · προστασία ματιών"}
            color={"#d35400"}
          />
          <JobCommonViolations
            title={"Συγκολλητής"}
            content={"Μάσκα/προσωπίδα (9%) · χαμηλό ρίσκο"}
            color={"#27ae60"}
          />
        </section>
      </div>
      <section className="job-analytics-summary-container">
        <h2 className="dashboard-titles">Σύνοψη ανά ρόλο</h2>
        <SummaryPerRoleTable />
      </section>
    </div>
  );
}
