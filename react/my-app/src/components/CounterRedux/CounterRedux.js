import React from 'react';
import Button from '../Button';

class Counter extends React.Component {
    state = {
        counter: 0
    }

    onClickHandler = (count) => {
        this.setState((prevState)=>{
            const newCount = prevState.counter + count
            return {counter: (newCount >= 0) ? prevState.counter + count : 0}
        })
    }

    render() {
        const {counter} = this.state;
        return <div>
            <h1>Counter!</h1>
            <h2>It is {counter}.</h2>
            <Button handleClick={() => this.onClickHandler(1)} text={'Update +1'}/>
            <Button handleClick={() => this.onClickHandler(-1)} text={'Update -1'}/>
            <Button handleClick={() => this.onClickHandler(10)} text={'Update +10'}/>
            <Button handleClick={() => this.onClickHandler(-10)} text={'Update -10'}/>
        </div>
    }
};

export  default Counter;