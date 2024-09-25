import { ReactElement, useState } from 'react';

const Counter = (): ReactElement => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white'>Counter</h1>
      <div className='mb-2 text-white font-bold font-30'>{count}</div>
      <div className='flex items-center gap-2'>
        <button className='w-10 px-4 py-2' onClick={() => setCount((prev) => (prev > 0 ? prev - 1 : 0))}>
          -
        </button>
        <button className='w-10 px-4 py-2' onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
      </div>
    </div>
  );
};
export { Counter };
