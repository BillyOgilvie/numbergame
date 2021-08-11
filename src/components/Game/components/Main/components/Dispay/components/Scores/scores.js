import './scores.css';

const Scores = () => {
  const score = 20;
  const highScore = 0;
  return (
    <div>
      <p className="label-score">💯 Score: {score}</p>
      <p className="label-highscore">🥇 Highscore: {highScore}</p>
    </div>
  );
};

export default Scores;
