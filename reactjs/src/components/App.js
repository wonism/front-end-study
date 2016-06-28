import React from 'react';
import update from 'react-addons-update';
/***** App_1 *****/
/*
import Header from './Header';
import Content from './Content';
import RandomNumbers from './RandomNumbers';
*/
/***** App_2 *****/
/*
import Contacts from './Contacts';
*/

import RefExample from './RefExample';

class App extends React.Component {
  render() {
    return (
      <RefExample />
    );
  }
}

class App_1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Math.round(Math.random() * 100)
    };

    this._updateValue = this._updateValue.bind(this);
  }

  _updateValue(randomValue) {
    this.setState({
      value: randomValue
    });
  }

  render() {
    return  (
      <div>
        <Header title = { this.props.headerTitle }/>
        <Content title = { this.props.contentTitle } content = { this.props.contentBody }/>
        <RandomNumbers number = { this.state.value } onUpdate = { this._updateValue } />
      </div>
    );
  }
}

class App_2 extends React.Component {
  render() {
    return (
      <Contacts/>
    );
  }
}

export default App;

