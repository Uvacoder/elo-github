import React from 'react'
import { Button, FormGroup, FormControl, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ query, onChangeSearchText, getRepository }) => (
<Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Elo Github</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type='text' placeholder='Search for repository...' value={query} onChange={onChangeSearchText} />
      </FormGroup>{' '}
      <Link to='/repositories'>
        <Button type='submit' onClick={getRepository}>Search</Button>
      </Link>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
)

export default Header