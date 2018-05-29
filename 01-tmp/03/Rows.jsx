import React, { Component } from "react";
import { Row } from "./Row.jsx";

export const Rows = ({ users }) => {
  return users.map(u => <Row key={u.id} {...u} />)
}