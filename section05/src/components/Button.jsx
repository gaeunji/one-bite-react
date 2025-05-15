const Button = ({ text, color = "black" }) => {
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {text} - {color}
    </button>
  );
};

export default Button;
