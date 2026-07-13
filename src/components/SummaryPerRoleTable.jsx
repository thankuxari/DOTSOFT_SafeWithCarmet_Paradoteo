import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./workertable.css";

export default function SummaryPerRoleTable() {
  return (
    <TableContainer className="workers-table-container">
      <Table
        sx={{ tableLayout: "fixed", width: "100%" }}
        aria-label="Summary per role"
      >
        <TableHead>
          <TableRow className="workers-table-row">
            <TableCell>ΡΟΛΟΣ</TableCell>
            <TableCell>ΑΤΟΜΑ</TableCell>
            <TableCell>ΣΥΜΜΟΡΦ.</TableCell>
            <TableCell>ΠΑΡΑΒΑΣΕΙΣ/ΜΗΝΑ</TableCell>
            <TableCell>ΠΕΡΙΣΤΑΤΙΚΑ</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow className="workers-table-body-row">
            <TableCell>Ηλεκτρολόγος</TableCell>
            <TableCell>12</TableCell>
            <TableCell>78%</TableCell>
            <TableCell>31</TableCell>
            <TableCell>3</TableCell>
          </TableRow>

          <TableRow className="workers-table-body-row">
            <TableCell>Χειριστής κλαρκ</TableCell>
            <TableCell>8</TableCell>
            <TableCell>64%</TableCell>
            <TableCell>44</TableCell>
            <TableCell>5</TableCell>
          </TableRow>

          <TableRow className="workers-table-body-row">
            <TableCell>Χειριστής γερανού</TableCell>
            <TableCell>5</TableCell>
            <TableCell>55%</TableCell>
            <TableCell>52</TableCell>
            <TableCell>6</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
