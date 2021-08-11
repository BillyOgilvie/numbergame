import './main.css';
import Message from './components/Dispay/components/Message/message';
import HighScore from './components/Dispay/components/HighScore/highscore';
import Score from './components/Dispay/components/Score/score';
import CheckGuess from './components/CheckGuess/checkGuess';

const Main = (props) => {
  const { onCheckClick, liftGuess, message } = props;

  return (
    <main>
      <section className="left">
        <CheckGuess onCheckClick={onCheckClick} liftGuess={liftGuess} />
      </section>
      <section className="right">
        <Message message={message} />
        <Score />
        <HighScore />
      </section>
    </main>
  );
};

export default Main;
