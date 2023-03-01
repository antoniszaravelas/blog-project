interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      value={text}
      className="text-white w-1/2 py-1 rounded-xl bg-green-500 mr-3 hover:scale-110"
    >
      {text}
    </button>
  );
};

export default Button;
