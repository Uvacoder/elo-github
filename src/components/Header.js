import React from 'react'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap'
//import { connect } from 'react-redux'

const Header = ({ query, onChangeSearchText, getRepository }) => (
<Navbar>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Gity</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search for user..." value={query} onChange={onChangeSearchText} />
      </FormGroup>{' '}
      <Button type="submit" onClick={getRepository}>Search</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>
)

export default Header