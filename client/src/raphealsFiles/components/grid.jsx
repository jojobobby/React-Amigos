import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Square from './square';
//JSX Expression that calls to react create component
class Grid extends Component {
    constructor(props) {
        super(props)

        this.valueArray = this.props.valueArray;
        this.grid = this.generateSquares();

        this.generateSquares.bind(this)
    }

    styles = { 
        display:'grid',
        gridTemplateColumns: 'repeat(3, 120px)',
        gridTemplateRows: 'repeat(3, 120px)',
        justifyContent: 'center'
    }

    render() {
        return (
            <div style={this.styles}>
               {
                 this.generateSquares()
               }
            </div>
        )
    }
    
    generateSquares = () => {
        let squares = [];
        for (let value in this.valueArray) {
            console.log(value);
            console.log(this.valueArray)
            squares.push(<Square value={this.valueArray[value]} key={value} />);
        }
        return squares;
    }

    state = {

    }
    
   
}
 
export default Grid;