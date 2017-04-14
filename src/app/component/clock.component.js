import React from 'react';

export default class Clock extends React.Component {
    constructor(){
        console.log('called constructor');
        super();
        this.state = {date: new Date()};
    }

    componentDidMount() {
        console.log('called componentDidMount');
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount() {
        console.log('called componentWillUnmount');
    }

    tick() {
        console.log('called tick');
        this.setState({
            date: new Date()
        });
    }


    render() {
        return( 
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

