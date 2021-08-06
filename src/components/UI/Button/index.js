import './index.css';

const Button = (props) => {
  const { classes, children } = props;
  const classString = `btn ${classes}`;

  return <button className={classString}>{children}</button>;
};

export default Button;
