import { useEffect, useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className='mb-2 bg-blue-400 w-8-10'>
      <h2 className='text-center text-white'>{time} secondes</h2>
    </div>
  );
};
export { Timer };
