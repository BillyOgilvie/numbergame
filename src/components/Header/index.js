import './index.css';
import AgainButton from './Components/AgainButton';
import Title from './Components/Title';
import SubTitle from './Components/Subtitle';
import SecretNumber from './Components/Number';

const Header = () => {
  let number;
  const onNewNumberHandler = (event) => {
    number = event.target.value;
    console.log(number);
  };

  return (
    <header>
      <AgainButton />
      <Title />
      <SubTitle />
      <SecretNumber onNewNumber={onNewNumberHandler} />
    </header>
  );
};

export default Header;
