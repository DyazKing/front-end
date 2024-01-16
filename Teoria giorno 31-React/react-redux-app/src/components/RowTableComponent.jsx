import React from "react";
import { Button } from "react-bootstrap";

export default function RowTableComponent({ user, index }) {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
        <Button variant="warning">
          <i className="bi bi-file-richtext"></i>
        </Button>
      </td>
    </tr>
  );
}
