import React from 'react';
import counterStyles from './counter.module.css';
import TextField from '@mui/material/TextField';

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

      <TextField 
        id="outlined-basic" 
        value={value} 
        variant="outlined"
        onChange={handleInputChange}
        sx={{
          margin: 2,
          width: '70%',
          '& .MuiInputBase-input': {
            textAlign: 'center',
            padding: 1
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#59abe3',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#59abe3',
            },
            '&.Mui-focused.MuiInputBase-root': {
              '& input': {
                borderColor: '#59abe3',
              },
            },
          }
        }}
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
