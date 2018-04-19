import React from 'react';
import GamesList from './GamesList';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

class GamesPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Games Page</h1>

                <GamesList games={this.props.games} />
            </div>
        );
    }
}
// export default GamesPage

// GamesPage.propTypes = {
//     games: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired
//     }).isRequired).isRequired
// }

function mapStateToProps(state) {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps)(GamesPage);
