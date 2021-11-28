import React, { useEffect, useReducer } from 'react';
import StepCountInput from '../StepCountInput';



function reducer(state, action) {

    if(action.type === 'count') {
        return {
            count: state.count + state.step,
            step: state.step
        }
    }
    if(action.type === 'step') {
        return {
            count: state.count,
            step: action.step
        }
    }


}

function SetCountWithReducer() {


    const [state, dispatch] = useReducer(reducer, {count: 0, step: 1});

    useEffect(() => {
        const countInterval = setInterval(() => {
            dispatch({type: 'count'});
        }, 1000);
        return () => clearInterval(countInterval);
    }, [dispatch]);

    const setStep = (number) => {
        dispatch({type: 'step', step: number})
    }


    return (
        <>
            <p>{state.count}</p>
            <StepCountInput step={state.step} setStep={setStep}/>
        </>
    )
}

export default SetCountWithReducer;
