interface HeadingsProps {
  children?: React.ReactNode;
  className?: string;
}

export const Heading1: React.FC<HeadingsProps> = ({
  children,
  className = '',
}) => {
  return <h1 className={`${className}`}>{children}</h1>;
};
