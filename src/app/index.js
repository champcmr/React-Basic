import React from 'react';
import {render} from 'react-dom';
import Clock from './clock.component.js';
import Members from './members/component/members.component.js';

class App extends React.Component{
    render(){
        return(
            <div className="">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Todos</a>
                    </div>
                    <ul className="nav navbar-nav">
                        <li className="active"><a href="#">Members</a></li>
                        {/*<li><a href="#">Page 1</a></li>
                        <li><a href="#">Page 2</a></li>
                        <li><a href="#">Page 3</a></li>*/}
                    </ul>
                </div>
            </nav>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-6 text-left">
                        <h3 className="p-0 m-0 page-header">Members List</h3>
                    </div>
                    <div className="col-xs-6 text-right">
                        <button className="btn btn-primary">Add Member</button>
                    </div> 
                </div>
                <div className="row">
                    <div className="col-xs-12">                         
                        <Members name="xxx"/>
                    </div>
                </div>
            </div>
            </div>
        );

    }
}

render(<App />, document.getElementById("app"));

