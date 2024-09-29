import { Car } from './Car';
import { Header } from './Header';

const Cars = () => {
  const cars = [
    { name: 'picasso', model: 'citroen' },
    { name: 'M 3', model: 'tesla' },
    { name: '206', model: 'peugeot' },
    { name: '', model: 'p' },
  ];
  return (
    <div className='flex flex-col items-center text-white'>
      <Header>CARS</Header>
      <table>
        <thead>
          <tr className='bg-red-400 mb-1 w-10 text-white'>
            <th className='w-10 px-4 py-2'>modèle</th>
            <th className='w-10 px-4 py-2'>marque</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car, index) => (
            <Car {...car} key={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export { Cars };
