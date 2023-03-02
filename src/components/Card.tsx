interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`flex flex-col  shadow-md shadow-green-100 justify-between w-full rounded-md md:w-1/2 border md:mr-4 mb-4 p-2  bg-white  ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
