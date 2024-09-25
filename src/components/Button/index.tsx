import { ReactNode } from 'react';

type ButtonProps = {
  className: string;
  onClick: () => void;
  children: ReactNode | string;
};
const Button = ({ className, onClick, children }: ButtonProps) => (
  <button
    className={`flex items-center px-4 py-2 m-2 h-10 border ${
      className.includes('bg') ? className : 'bg-blue-400 ' + className
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);
export { Button };
