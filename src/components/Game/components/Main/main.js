import './main.css';
import Message from './components/Dispay/components/Message/message';
import HighScore from './components/Dispay/components/HighScore/highscore';
import Score from './components/Dispay/components/Score/score';
import CheckGuess from './components/CheckGuess/checkGuess';

const Main = (props) => {
  const { onCheckClick } = props;

  return (
    <main>
      <section className="left">
        <CheckGuess onCheckClick={onCheckClick} />
      </section>
      <section className="right">
        <Message />
        <Score />
        <HighScore />
      </section>
    </main>
  );
};

export default Main;
