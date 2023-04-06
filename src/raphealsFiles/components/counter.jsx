import React, { Component } from 'react';

//JSX Expression that calls to react create component
class Counter extends Component {
    //Object of changing states
    state = {
        count: 0
    };

    styles = {
        fontSize: '10px',
        fontWeight: 'bold'
    }

    constructor() {
        super();
        this.render.bind(this);
        this.incrementCount.bind(this);
        this.formatCount.bind(this);
    }

    render() { 
        return ( 
            //React Fragment because you need to return one element
            //Insread of returning a div to make this one element
            //Do react fragment to make it not a div in the dom.
        <React.Fragment>
            <span className=''>{this.state.count}</span>
            <button onClick={this.incrementCount}>Increment</button>
        </React.Fragment>
        );
    }

    incrementCount = () => {
        console.log("ran")
        const count = this.state.count + 1;

        console.log(count)
        this.setState({count});

        
    }
    
    formatCount() {
        //take count from that object
        const { count } = this.state;

        return count === 0 ? <h1>Zero</h1> : count;
    }

    switch (element) {}
}
 
export default Counter;