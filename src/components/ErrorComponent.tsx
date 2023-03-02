interface ErrorComponentProps {
  children?: React.ReactNode;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ children }) => {
  return (
    <div
      className={`font-serif md:p-5 p-2 text-red-500 w-1/2  rounded-lg  mx-auto  md:text-xl text-xl text-center my-10 underline md:underline-offset-8 underline-offset-4`}
    >
      {children}
    </div>
  );
};

export default ErrorComponent;
