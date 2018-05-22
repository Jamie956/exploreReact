import React, { Component } from 'react'
import Loadable from 'react-loadable';
import Loading from './Loading';
// import About from './About';

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000, // 10 seconds
  modules: ['./Home'],
  webpack: () => [require.resolveWeak('./Home')],
});

const About = Loadable({
  loader: () => import('./About'),
  loading: Loading,
  delay: 300, // 0.3 seconds
  timeout: 10000, // 10 seconds
  modules: ['./About'],
  webpack: () => [require.resolveWeak('./About')],
});

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <Home/>
        <About/>
      </div>
    )
  }
}

export default App