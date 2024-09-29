import { ReactElement, useEffect, useState } from 'react';
import { logger } from '../../../utils/logger';

const UseEffectExample = (): ReactElement => {
  const [count, setCount] = useState<number>(0);
  const [nbr, setNbr] = useState<number>(0);
  logger(`vous avez cliqué ${count} fois`);

  useEffect(() => {
    console.log(`vous avez cliqué ${count} fois}`);
  }, [count]);
  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='mb-2 bg-blue-400 w-8-10'>
        <h2 className='text-center'>{count}</h2>
        <button className='px-4 py-2' onClick={() => setCount((prev) => prev + 1)}>
          click count
        </button>
      </div>
      <div className='mb-2 bg-blue-400 w-8-10'>
        <h2 className='text-center'>{nbr}</h2>
        <button className='px-4 py-2' onClick={() => setNbr((prev) => prev + 1)}>
          click nbr
        </button>
      </div>
    </div>
  );
};
export { UseEffectExample };
