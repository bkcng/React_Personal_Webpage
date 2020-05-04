import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Experience } from './Components/Experience';
import { Contact } from './Components/Contact';
import { NoMatch } from './Components/NoMatch';
import { Layout } from './Components/Layout';
import { NavigationBar } from './Components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <NavigationBar />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/experience" component={Experience} />
              <Route exact path="/contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>{' '}
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
