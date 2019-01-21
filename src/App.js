import React, { Component } from 'react';
import { connect } from 'react-redux'

import Header from './components/Header'
import Repositories from './components/Repositories'
import Repository from './components/Repository'

import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends Component {

  render() {
    const { repositories } = this.props;
    return (
      <div className="App">
        <Header />        
        <Switch>
          {repositories &&
            <Route exact path='/'
              render={props => (
                <Repositories {...props} data={repositories} />
              )}
            />
          }
          <Route exact path='/:username/:repo' component={Repository} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  repositories: state.repositories
})



export default connect(mapStateToProps, null)(withRouter(App));
