import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Square from './square';
//JSX Expression that calls to react create component
class Grid extends Component {
    constructor() {
        super()

        const cssCauseImLazy = {
            width: '180px',
            height: '180px'
        }

        this.valueArray = [0, 1, 2, 3, 4, 5, 5, 6, 7, 3, 2, 4, 5, <img style={cssCauseImLazy} src="https://www.digitalocean.com/_next/static/media/intro-to-cloud.d49bc5f7.jpeg" ></img>];
        this.grid = this.generateSquares();

        this.generateSquares.bind(this)
    }

    styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 180px)',
        gridTemplateRows: 'repeat(8, 180px)',
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