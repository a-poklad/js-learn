import React from 'react';
import Button from '../Button';

class Data extends React.Component {

    timerID = 0;

    state = {
        date: new Date().toTimeString(),
        isRunning: true,
        arr: [5, 8, 1, 3, 5]
    }

    componentDidMount() {
        this.startTimerID();
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date().toTimeString()
        });
    }

    startTimerID() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    onClickHandler = () => {

        this.setState((prevState) => {
            return {isRunning: !prevState.isRunning}
        }, () => {
            if(this.state.isRunning) {
                this.startTimerID();
            } else {
                clearInterval(this.timerID);
            }
        });

    }



    render() {
        const {date, isRunning} = this.state;
        return <div>
            <h1>Data!</h1>
            <h2>Date now: {date}.</h2>
            <Button handleClick={this.onClickHandler} text={isRunning ? 'Stop' : 'Start'}/>
            <ul>
                {
                    this.state.arr.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })
                }
            </ul>
        </div>
    }
};

export  default Data;