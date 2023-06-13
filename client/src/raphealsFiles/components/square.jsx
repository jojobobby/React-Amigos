import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//JSX Expression that calls to react create component
class Square extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        active: false,
        value: ""
    }

    style = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid gray',
        padding: '25px',
        width: '120px',
        height: '120px',
    }

    changeValue = () => {
        let { active } = this.state;

        if (active)
            return;

        this.setState({value: this.props.value})
        active = true;   
    }

    render () {
        return (
            <React.Fragment>
                <square style={this.style} onClick={this.changeValue}>
                    <>{this.state.value}</>
                </square>
            </React.Fragment>
        )  
    }
}
 
export default Square;