import "./button.css";

const Button = ({ handleSubmit, text }) => {
  return (
    <button
      type="button"
      className="btn cube cube-hover"
      onClick={handleSubmit}
    >
      <div className="bg-top">
        <div className="bg-inner"></div>
      </div>
      <div className="bg-right">
        <div className="bg-inner"></div>
      </div>
      <div className="bg">
        <div className="bg-inner"></div>
      </div>
      <div className="text">{text}</div>
    </button>
  );
};

export default Button;
