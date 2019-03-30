import React,{ Component } from 'react';

class Navigation extends Component{
render(){
    return(
        <nav className="navbar navbar-dark bg-dark">
        <a className="text-white" href="#">{ this.props.title } <span className="badge badge-pill badge-light ml-2">{this.props.ntasks}</span></a>
        
        </nav>
    )

}
}

export default Navigation;