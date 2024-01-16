import React from "react";
import { Table } from "react-bootstrap";
import RowTableComponent from "./RowTableComponent";
import {useSelector} from "react-redux"

export default function TableComponent() {
    const userList = useSelector(state =>{return state})
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {[{id:1, name: "John", username: "John Doe", email: "@lol"}, {id:2, name: "Jane", username: "Jane Doe", email: "@boh"}].map((row, index) => <RowTableComponent key={index} user={row} index={index} />)}
      </tbody>
    </Table>
  );
}
