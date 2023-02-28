import React from 'react';

interface ContainerProps {
  children?: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="py-10 px-5 bg-zinc-900 h-screen">{children}</div>;
};

export default Container;
