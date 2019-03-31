import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import { tasks } from './tasks.json';
import FrmAddTask from './components/FrmAddTask';

class App extends Component {
  constructor(){
    super();
    this.state = {
      tasks
    };
    this.handleAddTasks= this.handleAddTasks.bind(this);
  }
  
  handleAddTasks(tasks){
    this.setState({
      tasks: [...this.state.tasks,tasks]
    });
  };

  removeTask(task){
    if(window.confirm('Are you sure you want to delete the task?')){
      this.setState({
        tasks:this.state.tasks.filter((e,i)=>{
        return i !== task;
        })
      })
    }
  }

  changeBadgeColor(priority){
    switch(priority){
      case "low":
      return "badge badge-pill badge-primary";

      case "medium":
      return "badge badge-pill badge-info";

      case "high":
      return "badge badge-pill badge-success";

      default:
      return "badge badge-pill badge-info";
    }
  }

  render() {
    const tasks= this.state.tasks.map((tasks,i) =>{
      return(
        <div className="col-6 col-lg-4" key={i}>
        <div className="card mt-4">
        <div className="card-header"><h3>{tasks.title}</h3>
        <span className={this.changeBadgeColor(tasks.priority)}>{tasks.priority}</span></div>
        <div className="card-body"><p>{tasks.description}</p><p><mark>{tasks.responsible}</mark></p></div>
        <div className="card-footer"><button type="submit" className="btn btn-danger" onClick={this.removeTask.bind(this,i)}>Delete</button></div>
        </div>
        </div>
      )
    });

    return (
      <div className="App">
          <Navigation title="Task Board" ntasks={this.state.tasks.length}/>
          <div className="container-fluid">
          <div className="row">
          <div className="col-12 col-lg-2 mt-5"><FrmAddTask onAddTask={this.handleAddTasks}/></div>
          <div className="col-12 col-lg-10 mb-4">
          <div className="row mt-4">
          {tasks} 
          </div>
          </div>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
