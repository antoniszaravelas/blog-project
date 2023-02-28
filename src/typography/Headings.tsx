interface TypographyProps {
  children?: React.ReactNode;
  className?: string;
}

export const Heading1: React.FC<TypographyProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`text-2xl font-bold font-mono ${className}`}>
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
      className={`font-serif text-white text-5xl text-center mb-10 ${className}`}
    >
      {children}
    </div>
  );
};
