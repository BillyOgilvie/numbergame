import React, { useState } from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';

const Game = () => {
  const generateNumber = () => {
    return Math.trunc(Math.random() * 20) + 1;
  };

  const [currentNumber, setNumber] = useState(generateNumber);

  const onAgainClickHandler = () => {
    setNumber(generateNumber);
  };

  const onCheckClickHandler = () => {};

  return (
    <div>
      <Header
        currentNumber={currentNumber}
        onAgainClick={onAgainClickHandler}
      />
      <Main onCheckClick={onCheckClickHandler} />
    </div>
  );
};

export default Game;
