import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';

import ItemCard from './ItemCard';
import addItem from './AddComponent';
interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <h1>To Do App</h1>
        <addItem></addItem>
        {/* <ItemCard></ItemCard> */}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
