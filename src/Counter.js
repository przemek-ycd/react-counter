import React from 'react';
import { useState } from "react";

export const Counter = (props) => {

  const handleIncrement = () => {
    props.value === props.maxValue ? props.onChange(props.maxValue) : props.onChange(props.value + 1)
  }

  const handleDecrement = () => {
    props.value === 0 ? props.onChange(0) : props.onChange(props.value - 1)
  }

  const handleReset = () => {
    props.onChange(0);
  }

  return (
    <div>
      <p>{props.tag}: {props.value} </p>
      <button onClick={handleDecrement} disabled={props.value === 0}>-1</button>
      <button onClick={handleIncrement} disabled={props.value === props.maxValue}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}
