import React from 'react';
import counterStyles from './counter.module.css';

export const Counter = ({
    value, 
    maxValue, 
    onChange, 
    tag
  }) => {

  const handleIncrement = () => {
    value === maxValue ? onChange(maxValue) : onChange(value + 1)
  }

  const handleDecrement = () => {
    value === 0 ? onChange(0) : onChange(value - 1)
  }

  const handleInputChange = (event) => {
    const value = event.target.value.replace(/\+|-/ig, '');
    value <= maxValue ? onChange(Number(value)) : onChange(maxValue)
  }

  return (
    <div className={counterStyles.counterDiv}>
      <input
        className={counterStyles.counterInput} 
        type='text' 
        value={value} 
        onChange={handleInputChange} 
      />

      <button
        className={counterStyles.button}
        onClick={handleDecrement} 
        disabled={value === 0}>
          -1
      </button>

      <button
        className={counterStyles.button}
        onClick={handleIncrement} 
        disabled={value === maxValue}>
          +1
      </button>

      <p 
        className={counterStyles.counterParagraph}>
          Number of {tag}: {value} 
      </p>

    </div>
  )
}
