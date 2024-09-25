import { ReactElement, useState } from 'react';

const ConditionnalRendering = (): ReactElement => {
  const [display, setDisplay] = useState<boolean>(false);
  const handleDisplay = () => {
    setDisplay(!display);
  };
  return (
    <div className='flex flex-col items-center w-full'>
      <h1 className='text-white'>Affichage conditionnel</h1>

      <div className='flex items-center justify-center gap-2 w-full'>
        <button className={`w-10 px-4 py-2`} onClick={handleDisplay}>
          {display ? 'Masquer' : 'Afficher'}
        </button>
      </div>
      {display && <h1 className='text-white'>Vous me voyez</h1>}
    </div>
  );
};
export { ConditionnalRendering };
