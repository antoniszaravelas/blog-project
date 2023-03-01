interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      value={text}
      className={`${className} text-white  bg-green-500  hover:scale-110`}
    >
      {text}
    </button>
  );
};

export default Button;
