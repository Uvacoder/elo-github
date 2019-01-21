import React from 'react'
import { Button, FormGroup, FormControl, Navbar } from 'react-bootstrap'

import { connect } from 'react-redux'
import { fetchRepositories } from '../redux-flow/reducers/repositories/action-creators'

const Header = ({ onChangeText, handleClick, onSubmit }) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">Elo Github</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Navbar.Form pullLeft>
        <form onSubmit={onSubmit}>
          <FormGroup role='form'>          
            <FormControl type='text' name='query' placeholder='Search for repository...' />{' '}
              <Button type='submit'>Search</Button>
          </FormGroup>
        </form>
      </Navbar.Form>
    </Navbar.Collapse>
  </Navbar>
)

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (event) => {
    event.preventDefault()
    dispatch(fetchRepositories (event.target.query.value))
    event.target.query.value = ''
  }
})

export default connect(null, mapDispatchToProps)(Header)