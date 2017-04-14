import React from 'react';
import {render} from 'react-dom';
import Clock from './component/clock.component.js';

class App extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1"> 
                        <h1>Hello</h1>
                        <h2>It is {new Date().toLocaleTimeString()}.</h2>
                        <Clock name="chandresh" />
                    </div>
                </div>
            </div>
            
        );

    }
}

render(<App />, document.getElementById("app"));

