import { ReactElement, ReactNode } from 'react';

const Wrapper = ({ children }: { children: ReactNode }): ReactElement => {
  return <tr style={{ backgroundColor: 'pink', width: '400' }}>{children}</tr>;
};
export { Wrapper };
