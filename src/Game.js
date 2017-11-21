import React, { Component } from 'react';
import './App.css';
import _ from 'underscore';
class Game extends Component {
    constructor(props) {
        super(props)
        this.setCount = this.setCount.bind(this);
        this.state = {
            count: 9,
            score: 0,
            winner: 0,

        }
        this.rundNewWinner = this.rundNewWinner.bind(this);



    }
    componentWillMount() {
        this.rundNewWinner()
    }
    rundNewWinner() {
        var win = _.random(this.state.count - 1);
        this.setState({ winner: win })
            //   return 3;
    }
    setCount(e) {
        var val = e.target.value;
        this.setState({ count: val });
    }
    clicked(i) {
        if (i === this.state.winner) {
            this.setState({
                score: this.state.score + 5,
            })
            this.rundNewWinner()
        } else {
            this.setState({ score: this.state.score - 5 })
        }

    }
    renderButton(i) {
        var cls = "cell"
        if (i === this.state.winner) {
            cls += " winner";
        }
        return ( < button className = { cls }
            key = { i }
            onClick = { this.clicked.bind(this, i) } > < /button>
        )


    }

    render() {
        var btns = [];
        for (var i = 0; i < this.state.count; i++) {
            btns.push(this.renderButton(i));
        }
        return ( < div > < input type = "number"
            min = "3"
            max = "15"
            onChange = { this.setCount }
            step = "3"
            className = "number"
            value = { this.state.count }
            /> <div> { this.state.score }</div >
            <
            div className = "wrapper" > { btns } < /div></div >
        );
    }
}

export default Game;