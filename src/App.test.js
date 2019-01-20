import React from 'react';
import ReactDOM from 'react-dom';
import App, { getRepository } from './App';
import { BrowserRouter } from 'react-router-dom'
// import renderer from 'react-test-renderer';

// import Header from './components/Header'
// import Repositories from './components/Repositories'
// import Repository from './components/Repository'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('getRepository should be a function', () => {
  expect(getRepository).toBeUndefined()
})