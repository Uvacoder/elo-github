import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header'
import Repositories from './components/Repositories'
import Repository from './components/Repository'

import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      query: '',
      isFetching: true
    }
  }

  onChangeSearchText = (event) => {
    this.setState({ query: event.target.value })
  }

  getRepository = () => {
    fetch(`https://api.github.com/search/repositories?q=${this.state.query}&sort=name&order=asc`).then(
      async results => {
        try {
          return await results.json()
        }
        catch(error) {
          console.log('error: ', results.json())
      }})
    .then(data => {
      this.setState({
        data: data,
        isFetching: false
      })
    })
  }

  render() {
    return (  
      <div className="App">
        <Header 
          getRepository={this.getRepository} 
          onChangeSearchText={this.onChangeSearchText}
          query={this.state.query}
        />
        <Switch>
          {!this.state.isFetching &&
            <Route exact path='/repositories'
              render={props => (
                <Repositories {...props} data={this.state.data} />
              )}
            />
          }
          <Route exact path='/repositories/:username/:repo' component={Repository} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  query: PropTypes.string,
  isFetching: PropTypes.bool
}

export default withRouter(App);
