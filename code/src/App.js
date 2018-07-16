import React, { Component } from 'react';
import './App.css';
import List from './redux/containers/List';
import Form from './redux/containers/Form';
class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Coding Blog"
    }
  }
  render() {
    return (
        <main className="container">
          <header>
            <h1>{this.state.title}</h1>
          </header>
          <div className="row">
            <div className="col-md-8">
              <List />
            </div>
            <div className="col-md-4">
              <Form />
            </div>
          </div>
        </main>
    );
  }
}

export default App;
