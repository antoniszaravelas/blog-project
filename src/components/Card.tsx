interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-col justify-between rounded-md w-1/2 border mr-4 mb-4 p-2 transition duration-300 ease-in-out bg-white hover:bg-black hover:text-white hover:cursor-pointer   hover:scale-110 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
