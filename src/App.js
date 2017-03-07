import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './list'

class App extends Component {

  constructor() {
    super();

    this.state = {
      name: 'Preston',
      title: 'Groceries',
      items: ['Apples', 'Cookies', 'Butter', 'Sugar', 'Water', 'Purple']
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    console.log('Click me faster!');
    console.log('Handled by method');
  };

  handleChange(event){
    this.setState({
      name: event.target.value
    })
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p onClick={this.handleClick} className="App-intro">
          {this.state.name}<br/>
        </p>

        <input onChange={this.handleChange}/>

        <List title={this.state.title} items={this.state.items} />
        <List title="Chores" items={['Laundry', 'Dishes', 'Clean bedroom']} />

      </div>
    );
  }
}

export default App;
