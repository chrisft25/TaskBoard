import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import { tasks } from './tasks.json';


class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks
    }
  }


  render() {
    const tasks= this.state.tasks.map((tasks,i) =>{
      return(
        <div className="col-4">
        <div className="card mt-4">
        <div className="card-header"><h3>{tasks.title}</h3>
        <span className="badge badge-pill badge-danger">{tasks.priority}</span></div>
        <div className="card-body"><p>{tasks.description}</p><p><mark>{tasks.responsible}</mark></p></div>
        </div>
        </div>
      )
    });
    return (
      <div className="App">
          <Navigation title="Task Board" ntasks={this.state.tasks.length}/>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
          <div className="row mt-4">
          {tasks} 
          </div>
          </div>
      </div>
    );
  }
}

export default App;
