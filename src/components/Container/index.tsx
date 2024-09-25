import { ReactNode } from 'react';

type ContainerProps = {
  className: string;
  children: ReactNode;
};
const Container = ({ className, children }: ContainerProps) => (
  <div className={`flex flex-col items-center px-8 py-4 m-4 w-6-10 border ${className}`}>{children}</div>
);
export { Container };
