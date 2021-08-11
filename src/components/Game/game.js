import React, { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';

const Game = () => {
  const generateNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
  };

  const [currentNumber, setNumber] = useState(generateNumber);
  let userGuess = 0;

  const [guess, setGuess] = useState('');

  const [showNumberBool, setShowNumberBool] = useState(false);
  console.log(currentNumber);

  const [message, setMessage] = useState('Start guessing...');

  const [score, setScore] = useState(20);
  const [highScore, setHighScore] = useState(0);

  const [bodyClass, setBodyClass] = useState('body');

  const onAgainClickHandler = () => {
    setNumber(generateNumber);
    setMessage('Start guessing...');
    setScore(20);
    setShowNumberBool(false);
    setBodyClass('body');
    setGuess('');
  };

  const onCheckClickHandler = () => {
    if (score > 1 && !showNumberBool) {
      if (userGuess > 20 || userGuess < 1) {
        setMessage('⛔ Pick a number between 1 and 20 ⛔');
      } else {
        if (userGuess !== currentNumber) {
          setScore(score - 1);
          setMessage(
            userGuess > currentNumber
              ? '📈 Too high. Go lower! 👇'
              : '📉 Too low. Go higher! 👆'
          );
        }

        if (userGuess === currentNumber) {
          setMessage('🎉 Correct! 👍');
          if (score > highScore) setHighScore(score);
          setShowNumberBool(true);
          setBodyClass((prev) => {
            return `${prev} win`;
          });
        }
      }
    } else if (!showNumberBool) {
      setScore(0);
      setMessage('💣 Game Over! 💀');
      setShowNumberBool(true);
      setNumber('☠');
      setBodyClass((prev) => {
        return `${prev} lose`;
      });
    }
  };

  const liftGuess = (guess) => {
    userGuess = Number(guess);
  };

  return (
    <div className={bodyClass}>
      <Header
        currentNumber={currentNumber}
        onAgainClick={onAgainClickHandler}
        showNumber={showNumberBool}
      />
      <Main
        onCheckClick={onCheckClickHandler}
        liftGuess={liftGuess}
        message={message}
        score={score}
        highScore={highScore}
        guess={guess}
        setGuess={setGuess}
      />
    </div>
  );
};

export default Game;
