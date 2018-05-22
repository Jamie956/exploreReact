import React, { Component } from 'react'
import Loadable from 'react-loadable';
import Loading from './components/Loading';
// import About from './components/About';

const Home = Loadable({
  loader: () => import('./components/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./components/About'),
  loading: Loading,
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Home />
        <About />
      </div>
    )
  }
}

export default App