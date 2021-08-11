import './againButton.css';
import Button from '../../../UI/Button/button';

const AgainButton = (props) => {
  const { onAgainClick } = props;
  return (
    <Button classes="again" onClick={onAgainClick}>
      Again!
    </Button>
  );
};

export default AgainButton;
