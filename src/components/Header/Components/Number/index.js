import React, { useState } from 'react';
import './index.css';

const SecretNumber = (props) => {
  const { onNewNumber } = props;

  const secretNumberGenerator = () => {
    Math.trunc(Math.random() * 20) + 1;
  };
  const [currentSecretNumber, setSecretNumber] = useState(
    secretNumberGenerator()
  );

  return (
    <div className="number" onChange={onNewNumber}>
      {setSecretNumber(secretNumberGenerator)}
    </div>
  );
};

export default SecretNumber;
