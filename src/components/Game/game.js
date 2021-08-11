import React, { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';

const Game = () => {
  const generateNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
  };

  const [currentNumber, setNumber] = useState(generateNumber);
  let userGuess = 0;

  const [message, setMessage] = useState('Start guessing...');

  const onAgainClickHandler = () => {
    setNumber(generateNumber);
  };

  const onCheckClickHandler = () => {
    if (userGuess > 20 || userGuess < 1) {
      setMessage('⛔ Pick a number between 1 and 20 ⛔');
    } else {
      if (userGuess < currentNumber) {
        setMessage('📉 Too low. Go higher! 👆');
      }

      if (userGuess > currentNumber) {
        setMessage('📈 Too high. Go lower! 👇');
      }

      if (userGuess === currentNumber) {
        setMessage('🎉 Correct! 👍');
      }
    }
  };

  const liftGuess = (guess) => {
    userGuess = Number(guess);
  };

  return (
    <div>
      <Header
        currentNumber={currentNumber}
        onAgainClick={onAgainClickHandler}
      />
      <Main
        onCheckClick={onCheckClickHandler}
        liftGuess={liftGuess}
        message={message}
      />
    </div>
  );
};

export default Game;
