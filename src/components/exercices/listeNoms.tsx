import { Header } from './cars/Header';

const ListeNoms = ({ names }: { names: string[] }) => {
  return (
    <div>
      <Header>Liste</Header>
      <ul>
        {names.map((nom, idx) => (
          <li key={idx} className='text-white'>
            {nom}
          </li>
        ))}
      </ul>
    </div>
  );
};
export { ListeNoms };
