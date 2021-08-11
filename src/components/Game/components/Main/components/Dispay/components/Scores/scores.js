import './scores.css';

const Scores = (props) => {
  const { score, highScore } = props;

  return (
    <div>
      <p className="label-score">💯 Score: {score}</p>
      <p className="label-highscore">🥇 Highscore: {highScore}</p>
    </div>
  );
};

export default Scores;
