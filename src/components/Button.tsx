interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  className,
  children = '',
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      value={text}
      className={`${className} text-black  bg-green-500  hover:scale-110`}
    >
      {children}
      {text}
    </button>
  );
};

export default Button;
