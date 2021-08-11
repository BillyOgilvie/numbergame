import './main.css';
import Message from './components/Dispay/components/Message/message';
import Scores from './components/Dispay/components/Scores/scores';
import CheckGuess from './components/CheckGuess/checkGuess';

const Main = (props) => {
  const {
    onCheckClick,
    liftGuess,
    message,
    score,
    highScore,
    guess,
    setGuess,
  } = props;

  return (
    <main>
      <section className="left">
        <CheckGuess
          onCheckClick={onCheckClick}
          liftGuess={liftGuess}
          guess={guess}
          setGuess={setGuess}
        />
      </section>
      <section className="right">
        <Message message={message} />
        <Scores score={score} highScore={highScore} />
      </section>
    </main>
  );
};

export default Main;
