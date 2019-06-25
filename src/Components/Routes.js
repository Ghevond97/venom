import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home';
import AnimalVenom from './AnimalVenom';
import NavBar from './NavBar';

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en',
      venomCategories: null,
    };
  }

  componentDidMount() {
    this.getVenomCategories();
    const { lang } = this.state;
    console.log(lang, 'apush1');
    // this.getVenomSubCategories();
  }

  componentDidUpdate(props, astate) {
    const { lang } = this.state;
    if (astate.lang !== lang) {
      this.getVenomCategories();
    }
  }

  getVenomCategories = () => {
    const { lang } = this.state;
    console.log(lang, 'apush');
    const url = `https://admin.armvenomprod.com/api/venom-categories?lang=${lang}`;
    fetch(url, { headers: { 'Content-Type': 'application/json' } })
      .then(res => res.json())
      .then(data => {
        console.log('NNNNN', data);
        this.setState({ venomCategories: data });
      });
  };

  onLangChange = lang => {
    this.setState({ lang });
  };

  render() {
    const { venomCategories } = this.state;
    return (
      <Router>
        <NavBar onLangChange={this.onLangChange} lang={this.state.lang} />
        <Route
          exact
          path="/"
          component={() => (
            <Home
              lang={this.state.lang}
              venomCategories={venomCategories || ''}
            />
          )}
        />
        <Route
          path="/3"
          component={() => (
            <AnimalVenom
              id={3}
              lang={this.state.lang}
              venomCategories={
                venomCategories ? venomCategories.categories[1] : ''
              }
            />
          )}
        />
        <Route
          path="/2"
          component={() => (
            <AnimalVenom
              id={2}
              lang={this.state.lang}
              venomCategories={
                venomCategories ? venomCategories.categories[0] : ''
              }
            />
          )}
        />
      </Router>
    );
  }
}

export default Routes;
