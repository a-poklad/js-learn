import React from 'react';

function StepCountInput(props) {
  const {setStep, step} = props;
    return (
      <input
        type="number"
        placeholder="10"
        value={step}
        onChange={(e) => setStep(parseInt(e.target.value, 10))}
      />
    )
}

export default StepCountInput;
