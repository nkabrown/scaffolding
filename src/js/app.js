'use strict';
import React, { Component } from 'react';
import { render } from 'react-dom';

import '../css/style.css';

export default class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

render(<App />, document.getElementById('mount'));
