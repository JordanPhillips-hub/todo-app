import "./Buttons.scss";

const Button = (props) => {
  const { text } = props;
  return (
    <button type="button" {...props}>
      {text}
    </button>
  );
};

export default Button;
