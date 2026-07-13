import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import MAPBadge from "../components/MAPBadge.jsx";
import { workers } from "../data/data.js";
import { incidents } from "../data/data.js";
import "./workertable.css";

export default function WorkerTable() {
  return (
    <TableContainer className="workers-table-container">
      <Table
        className="workers-table"
        sx={{ tableLayout: "fixed", width: "100%" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow className="workers-table-row">
            <TableCell align="left">ΗΜ/ΝΙΑ</TableCell>
            <TableCell align="left">ΤΥΠΟΣ</TableCell>
            <TableCell align="left">ΖΩΝΗ</TableCell>
            <TableCell align="left">ΣΥΝΘΗΚΕΣ</TableCell>
            <TableCell align="left">ΣΟΒΑΡΟΤ.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {incidents.map((incident) => (
            <TableRow key={incident.date} className="workers-table-body-row">
              <TableCell align="left">{incident.date}</TableCell>
              <TableCell align="left">{incident.type}</TableCell>
              <TableCell align="left">{incident.zone}</TableCell>
              <TableCell align="left">
                {incident.conditions.weather} &#183; {incident.conditions.tempC}
                &#8451; &#183; κόπωση: {incident.conditions.fatigue}
              </TableCell>
              <TableCell align="left">{incident.severity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
