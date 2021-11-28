import React, { useState, useEffect } from 'react';
import StepCountInput from '../StepCountInput';

function StepCount() {

    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    useEffect(() => {
        const countInterval = setInterval(() => {
            setCount(count + step)
        }, 1000);
        return () => clearInterval(countInterval);
    }, [count, step]);


    return (
        <>
            <p>{count}</p>
            <StepCountInput step={step} setStep={setStep}/>
        </>
    )
}

export default StepCount;
