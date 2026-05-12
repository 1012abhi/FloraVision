const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;