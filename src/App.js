import React, { Component } from 'react';
import Layout from './components/layout/Layout';
import BuildBurger from './containers/BuildBurger/BuildBurger';
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BuildBurger/>
        </Layout>
      </div>
    );
  }
}

export default App;
