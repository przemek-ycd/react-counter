import React from 'react';
import { useState } from "react";

export const Counter = (props) => {

  const handleIncrement = () => {
    props.value === props.maxValue ? props.onChange(props.maxValue) : props.onChange(props.value + 1)
  }

  const handleDecrement = () => {
    props.value === 0 ? props.onChange(0) : props.onChange(props.value - 1)
  }

  const handleInputChange = (event) => {
    const value = event.target.value.replace(/\+|-/ig, '');
    value <= props.maxValue ? props.onChange(Number(value)) : props.onChange(props.maxValue)
  }

  return (
    <div>
      <p>{props.tag}: {props.value} </p>
      <input type='text' value={props.value} onChange={handleInputChange} />
      <button onClick={handleDecrement} disabled={props.value === 0}>-1</button>
      <button onClick={handleIncrement} disabled={props.value === props.maxValue}>+1</button>
    </div>
  )
}
