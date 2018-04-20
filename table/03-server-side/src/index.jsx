import React from "react";
import { render } from "react-dom";
import ReactTable from "react-table";
import "react-table/react-table.css";
import _ from "lodash";

const rawData = [{
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
}, {
  name: 'Tomcat',
  age: 19,
  friend: {
    name: 'Dog',
    age: 25,
  }
}, {
  name: 'Nash',
  age: 26,
  friend: {
    name: 'Juju',
    age: 5,
  }
}, {
  name: 'Pufa',
  age: 31,
  friend: {
    name: 'Pina',
    age: 27,
  }
}, {
  name: 'Koni',
  age: 36,
  friend: {
    name: 'Tnu',
    age: 22,
  }
}]

const requestData = (pageSize, page, sorted, filtered) => {
  console.log('call requestData')
  return new Promise((resolve, reject) => {
    let filteredData = rawData;

    if (filtered.length) {
      console.log('need filter')
      filteredData = filtered.reduce((filteredSoFar, nextFilter) => {
        return filteredSoFar.filter(row => {
          return (row[nextFilter.id] + "").includes(nextFilter.value);
        });
      }, filteredData);
    }

    console.log(filteredData)

    const sortedData = _.orderBy(
      filteredData,
      sorted.map(sort => {
        return row => {
          if (row[sort.id] === null || row[sort.id] === undefined) {
            return -Infinity;
          }
          return typeof row[sort.id] === "string"
            ? row[sort.id].toLowerCase()
            : row[sort.id];
        };
      }),
      sorted.map(d => (d.desc ? "desc" : "asc"))
    );

    console.log(sortedData)

    const res = {
      rows: sortedData.slice(pageSize * page, pageSize * page + pageSize),
      pages: Math.ceil(filteredData.length / pageSize)
    };

    setTimeout(() => resolve(res), 500);
  });
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pages: null,
      loading: true
    };
    this.fetchData = this.fetchData.bind(this);
  }
  
  fetchData(state, instance) {
    console.log('call fetchData')
    this.setState({ loading: true });
    requestData(
      state.pageSize,
      state.page,
      state.sorted,
      state.filtered
    ).then(res => {
      this.setState({
        data: res.rows,
        pages: res.pages,
        loading: false
      });
    });
  }

  render() {
    const { data, pages, loading } = this.state;

    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Age',
        accessor: 'age',
        Cell: e => <h4>{e.value}</h4>
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
          defaultPageSize={5}
          className="-striped -highlight"

          manual // Forces table not to paginate or sort automatically, so we can handle it server-side
          pages={pages} // Display the total number of pages
          loading={loading} // Display the loading overlay when we need it
          onFetchData={this.fetchData} // Request new data when things change
          filterable
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));