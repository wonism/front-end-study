import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumbers from './RandomNumbers';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: Math.round(Math.random()*100)
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

export default App;

