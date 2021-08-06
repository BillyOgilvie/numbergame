import './index.css';
import AgainButton from './Components/AgainButton';
import Title from './Components/Title';
import SubTitle from './Components/Subtitle';
import SecretNumber from './Components/Number';

const Header = () => {
  return (
    <header>
      <AgainButton />
      <Title />
      <SubTitle />
      <SecretNumber />
    </header>
  );
};

export default Header;
