interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
}

export const Heading1: React.FC<TypographyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`text-2xl font-bold font-mono  ${className}`}>
      {children}
    </div>
  );
};

export const Paragraph: React.FC<TypographyProps> = ({
  children,
  className = '',
}) => {
  return <div className={`font-serif ${className}`}>{children}</div>;
};

export const Title: React.FC<TypographyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`font-robotoMono md:p-5 p-2 bg-green-400 rounded-lg md:w-1/2 mx-auto text-black md:text-5xl text-4xl text-center my-10  ${className}`}
    >
      {children}
    </div>
  );
};
