import React from 'react';
import Button from '../Button';
import {useSelector, useDispatch} from 'react-redux';
import { decrementCounter, incrementCounter } from '../../actions/counterActions';

function CounterRedux() {
    const dispatch = useDispatch();
    const countRedux = useSelector((state) => state.value);


    console.log(countRedux);

    return <div>
        <h1>Counter Redux!</h1>
        <h2>It is {countRedux}.</h2>
        <Button onClick={() => dispatch(incrementCounter())} text={'Update +1'}/>
        <Button onClick={() => dispatch(decrementCounter())} text={'Update -1'}/>
    </div>
};

export  default CounterRedux;
