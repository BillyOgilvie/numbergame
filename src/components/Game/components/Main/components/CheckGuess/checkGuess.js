import './checkGuess.css';
import React, { useState } from 'react';
import Button from '../../../UI/Button/button';

const CheckGuess = (props) => {
  const { onCheckClick, liftGuess } = props;

  const [guess, setGuess] = useState('');

  const captureGuess = (event) => {
    setGuess(event.target.value);
  };

  const onCheckClickHandler = () => {
    liftGuess(guess);
    onCheckClick();
  };

  return (
    <>
      <input
        type="number"
        min="1"
        max="20"
        className="guess"
        value={guess}
        onChange={captureGuess}
      ></input>
      <Button classes={'check'} onClick={onCheckClickHandler}>
        Check!
      </Button>
    </>
  );
};

export default CheckGuess;
