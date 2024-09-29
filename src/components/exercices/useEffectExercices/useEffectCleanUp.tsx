import { ReactElement, useEffect, useState } from 'react';
// import { logger } from '../../../utils/logger';
import { Timer } from './Timer';

const UseEffectCleanUp = (): ReactElement => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {}, []);
  return (
    <div className='flex flex-col items-center w-8-10'>
      <div className='mb-2 bg-blue-400 w-8-10 flex flex-col items-center'>
        <h2 className='text-center w-10'>{show ? 'Cacher time' : 'Afficher time'}</h2>
        <button className='px-4 py-2' onClick={() => setShow(!show)}>
          aficher ou détruire le timer
        </button>
      </div>
      {show && <Timer />}
    </div>
  );
};
export { UseEffectCleanUp };
