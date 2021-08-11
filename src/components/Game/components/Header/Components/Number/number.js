import './number.css';

const SecretNumber = (props) => {
  const { currentNumber } = props;

  return <div className="number">{currentNumber}</div>;
};

export default SecretNumber;
