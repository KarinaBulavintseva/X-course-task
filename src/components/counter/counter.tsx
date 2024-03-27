import React, { ChangeEvent } from 'react';

type CounterProps = {
  min: number;
  max: number;
  inputValue: number;
  onCounterChange: (count: number) => void;
};

const Counter: React.FC<CounterProps> = ({
  min,
  max,
  inputValue,
  onCounterChange,
}) => {
  const handleClickSubtract = () => {
    if (inputValue > min) {
      onCounterChange(inputValue - 1);
    }
  };

  const handleClickAdd = () => {
    if (inputValue < max) {
      onCounterChange(inputValue + 1);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') {
      onCounterChange(min);
      return;
    }

    let value = e.target.valueAsNumber;
    if (value > max) {
      value = max;
    } else if (value < min) {
      value = min;
    }

    onCounterChange(value);
  };

  return (
    <div className='flex'>
      <button
        onClick={handleClickSubtract}
        disabled={min >= inputValue}
        className='rounded-sm border-[2px] border-gray-400 bg-gray-100 px-2 disabled:border-gray-300 disabled:opacity-75'
      >
        -
      </button>
      <input
        type='number'
        min={min}
        max={max}
        value={inputValue}
        onChange={handleChange}
        className='flex w-8  text-center outline-none'
      />
      <button
        onClick={handleClickAdd}
        disabled={inputValue >= max}
        className='rounded-sm border-[2px] border-gray-400 bg-gray-100 px-2 disabled:border-gray-300 disabled:opacity-75'
      >
        +
      </button>
    </div>
  );
};

export { Counter };
