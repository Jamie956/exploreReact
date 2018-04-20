import React, { Component } from 'react'
import ReactDOM from "react-dom";

const data = [
  {
    id: 1,
    name: 'tom',
    age: 18
  },
  {
    id: 2,
    name: 'moni',
    age: 28
  },
  {
    id: 3,
    name: 'nufi',
    age: 16
  }
]

const columns = [
  {
    header: 'Name',
    accessor: 'name'
  },
  {
    header: 'Age',
    accessor: 'age'
  },
  {
    header: 'ID',
    accessor: 'id'
  },
]

const renderThs = (columns) => {
  return (
    columns.map((column, i) =>
      <th key={i}>{column.header}</th>
    )
  )
}

const renderRows = (rows, columns) => {
  return (
    rows.map((row, i) =>
      <tr key={i}>
        {renderCell(row, columns)}
      </tr>
    )
  )
}

const renderCell = (row, columns) => {
  return (
    columns.map((column, i) =>
      <td key={i}>
        {row[column.accessor]}
      </td>
    )
  )
}

const Table = (props) => {
  const { columns, rows } = props
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {renderThs(columns)}
          </tr>
        </thead>
        <tbody>
          {renderRows(rows, columns)}
        </tbody>
      </table>
    </div>
  )
}

ReactDOM.render(
  <Table
    rows={data}
    columns={columns}
  />
  , document.getElementById('root')
);