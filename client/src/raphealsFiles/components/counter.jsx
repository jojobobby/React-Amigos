import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//JSX Expression that calls to react create component
class Counter extends Component {
    //Object of changing states
    state = {
        count: 0,
        win: <h1></h1>
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
            <button onClick={this.resetCount}>Reset</button>
            <p>{this.state.win}</p>
        </React.Fragment>
        );
    }

    incrementCount = () => {
        const count = this.state.count + 1;

        if (count === 100)
        {
          this.setState({ win: <h1>You Win!</h1> });
        }
        
        this.setState({count});
    }

    WinMessage = () => {
        
    }

    resetCount = () => {
        this.setState({count:0})
    }
    
    formatCount() {
        //take count from that object
        const { count } = this.state;

        return count === 0 ? <h1>Win</h1> : count;
    }

    switch (element) {}
}
 
export default Counter;