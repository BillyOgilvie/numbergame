import './button.css';

const Button = (props) => {
  const { classes, children, onClick } = props;
  const classString = `btn ${classes}`;

  return (
    <button className={classString} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
