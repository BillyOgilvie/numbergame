import './index.css';
import GuessInput from './components/GuessInput/components/GuessInput';
import Message from './components/Dispay/components/Message';
import HighScore from './components/Dispay/components/HighScore';
import Score from './components/Dispay/components/Score';
import CheckButton from './components/GuessInput/components/CheckButton';

const Main = () => {
  return (
    <main>
      <section className="left">
        <GuessInput />
        <CheckButton />
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
