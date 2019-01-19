import React, { Component } from 'react';
//import styled from 'styled-components'
import Header from './components/Header'
import Container from './components/Container'

class App extends Component {
  constructor() {
    super()
    this.state = { 
      query: 'dota',
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
      console.log(data)
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
        
        {!this.state.isFetching && <Container data={this.state.data} />}
      </div>
    );
  }
}

export default App;
