import './checkGuess.css';
import Button from '../../../UI/Button/button';

const CheckGuess = (props) => {
  const { onCheckClick } = props;

  return (
    <>
      <input type="number" className="guess"></input>
      <Button classes={'check'} onClick={onCheckClick}>
        Check!
      </Button>
    </>
  );
};

export default CheckGuess;
