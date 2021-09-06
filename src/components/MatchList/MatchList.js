import React from "react";
import format from "date-fns/format";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

function MatchList({ matches }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Домашняя команда</TableCell>
            <TableCell>Гостевая команда</TableCell>
            <TableCell align="right">Дата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {matches.map((match) => (
            <TableRow key={match.id}>
              <TableCell>{match.homeTeam.name}</TableCell>
              <TableCell>{match.awayTeam.name}</TableCell>
              <TableCell align="right">
                {format(new Date(match.utcDate), "yyyy-MM-dd")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default MatchList;
