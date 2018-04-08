import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: 'Diko',
        age: 12
      }, {
        name: 'Juju',
        age: 18
      }]
    }
    this.renderEditable = this.renderEditable.bind(this);
  }

  renderEditable(cellInfo) {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={e => {
          const data = [...this.state.data];
          data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
          console.log(data)

          this.setState({ data });
        }}
      />
    );
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
        Cell: this.renderEditable
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: this.renderEditable
      }
    ]

    const divStyle = {
      color: 'blue',
      height: 42
    }

    return (
      <div style={divStyle} className="container">
        <ReactTable
          data={data}
          columns={columns}
          defaultPageSize={5}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));