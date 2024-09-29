import { ReactElement, ReactNode } from 'react';

const Header = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div className='text-white flex justify-center font-bold'>
      <h1>{children}</h1>
    </div>
  );
};
export { Header };
