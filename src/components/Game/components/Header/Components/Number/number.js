import './number.css';

const SecretNumber = (props) => {
  const { currentNumber, showNumber } = props;

  if (!showNumber) {
    return <div className="number">?</div>;
  } else {
    return <div className="number">{currentNumber}</div>;
  }
};

export default SecretNumber;
