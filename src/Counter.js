import React from 'react';
import { useState } from "react";

export const Counter = ({value, maxValue, onChange, tag}) => {

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
    <div>
      <p>{tag}: {value} </p>
      <input type='text' value={value} onChange={handleInputChange} />
      <button onClick={handleDecrement} disabled={value === 0}>-1</button>
      <button onClick={handleIncrement} disabled={value === maxValue}>+1</button>
    </div>
  )
}
