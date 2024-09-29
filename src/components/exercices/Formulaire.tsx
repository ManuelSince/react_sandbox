import { ReactElement, useState } from 'react';

const Formulaire = (): ReactElement => {
  const [textField, setTextField] = useState<string>('');

  return (
    <div className='flex flex-col items-center w-full text-white'>
      <h1 className=''>Formulaire</h1>
      <h2 className='font-30'>{textField}</h2>
      <div className='flex items-center justify-center gap-2 w-full'>
        <input type='text' onChange={(e) => setTextField(e.target.value)} />
      </div>
    </div>
  );
};
export { Formulaire };
