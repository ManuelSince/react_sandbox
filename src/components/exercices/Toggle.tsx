import { ReactElement, useState } from 'react';

const Toggle = (): ReactElement => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-white'>Toggle</h1>
      <div className={`mb-2 font-bold font-20 ${toggle ? 'text-green' : 'text-red'}`}>
        {toggle ? 'activée' : 'désactivé'}
      </div>
      <div className='flex items-center gap-2'>
        <button
          className={`w-10 px-4 py-2 ${toggle ? 'bg-blue-400' : 'bg-red-400'}`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? 'activée' : 'désactivée'}
        </button>
      </div>
    </div>
  );
};
export { Toggle };
