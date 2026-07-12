import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MAPBadge from "../components/MAPBadge.jsx";
import { workers } from "../data/data.js";
import "./workertable.css";


export default function WorkerTable() {
  return (
    <TableContainer className="workers-table-container">
              <Table className="workers-table" sx={{ tableLayout: "fixed", width: "100%" }} aria-label="simple table">
                <TableHead >
                  <TableRow className="workers-table-row">
                    <TableCell align="left">ΟΝΟΜΑ</TableCell>
                    <TableCell align="left">ΡΟΛΟΣ</TableCell>
                    <TableCell align="left">ΖΩΝΗ</TableCell>
                    <TableCell align="left">ΜΑΠ</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {workers.map((worker) => (
                    <TableRow
                      key={worker.name}
                    >
                      <TableCell align="left">
                        {worker.name}
                      </TableCell>
                      <TableCell align="left">{worker.role}</TableCell>
                      <TableCell align="left">{worker.zone}</TableCell>
                      <TableCell align="left"><MAPBadge isCompliant={worker.compliant}/></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
  )
}
