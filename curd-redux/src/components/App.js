import React, { Component } from 'react'
import { Link, Match } from 'react-router';
import GamesPage from './GamesPage';

class App extends Component {
    render() {
        return (
            <div>
                <GamesPage />
                {/* <Link to="games">Games</Link>
                <hr />
                <Match pattern="/games" component={GamesPage} /> */}
            </div>
        )
    }
}

export default App
