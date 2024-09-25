import { ReactElement, useState } from 'react';

const ChangeColor = (): ReactElement => {
  const [color, setColor] = useState<string>('#639732');
  const handleColor = () => {
    setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };
  return (
    <div className='flex flex-col items-center w-full' style={{ backgroundColor: color }}>
      <h1 className='text-white'>Change color</h1>

      <div className='flex items-center justify-center gap-2 w-full'>
        <button className={`w-10 px-4 py-2`} onClick={handleColor}>
          Changer la couleur
        </button>
      </div>
    </div>
  );
};
export { ChangeColor };
