import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TesterFile from './TesterFile';

function render() {
  ReactDOM.render(
  <React.StrictMode>
  <TesterFile />
</React.StrictMode>
  
  , document.body);
}

render();