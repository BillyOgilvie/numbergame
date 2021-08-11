import './header.css';
import AgainButton from './Components/AgainButton/againButton';
import Title from './Components/Title/title';
import SubTitle from './Components/Subtitle/subtitle';
import SecretNumber from './Components/Number/number';

const Header = (props) => {
  const { currentNumber, onAgainClick } = props;

  return (
    <header>
      <AgainButton onAgainClick={onAgainClick} />
      <Title />
      <SubTitle />
      <SecretNumber currentNumber={currentNumber} />
    </header>
  );
};

export default Header;
