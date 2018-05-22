import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";

import Art from './topic/art'
import Health from './topic/health'
import Music from './topic/music'

export class Topics extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <h2>Topics</h2>
        {match.url}
        <ul>
          <li><Link to={`${match.url}/a`}>Art</Link></li>
          <li><Link to={`${match.url}/b`}>Health</Link></li>
          <li><Link to={`${match.url}/c`}>ccccc</Link></li>
        </ul>

        <Route path={`${match.url}/a`} component={Art} />
        <Route path={`${match.url}/b`} component={Health} />
        <Route path={`${match.url}/c`} component={Music} />

        <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>} />
      </div>
    )
  }
}

export default Topics

