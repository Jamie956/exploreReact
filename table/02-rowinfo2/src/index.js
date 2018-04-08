import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(row) {
    console.log('Call handleClick')
    console.log(row)
    alert('name: '+row.name+', age: '+row.age)
  }

  render() {
    const data = [{
      name: 'Diko',
      age: 12,
      friend: {
        name: 'Juju',
        age: 18,
      }
    }, {
      name: 'Juju',
      age: 18,
      friend: {
        name: 'Pina',
        age: 25,
      }
    }]

    const columns = [
      {
        Header: "Info",
        columns: [
          {
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
          }, {
            Header: 'Age',
            accessor: 'age',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
          },
        ]
      },
      {
        Header: 'Friend',
        columns: [
          {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
          }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
          }
        ]
      }
    ]

    const divStyle = {
      color: 'blue',
      height: 42,
    }

    return (
        <div style={divStyle} className="container">
          <ReactTable
            data={data}
            columns={columns}
            getTdProps={(state, rowInfo, column, instance) => {
              return {
                onClick: (e, handleOriginal) => {
                  rowInfo === undefined ? '' : this.handleClick(rowInfo.row)
                }
              }
            }}
            defaultPageSize={5}
            className="-striped -highlight"
          />
        </div>
    );
  }
}

render(<App />, document.getElementById("root"));
