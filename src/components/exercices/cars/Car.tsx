import { Wrapper } from './Wrapper';

type CarProps = {
  name: string;
  model: string;
};
const Car = ({ name, model }: CarProps) => {
  return (
    name &&
    model && (
      <Wrapper>
        <td className='px-4 py-2 text-center'>
          <span>{name}</span>
        </td>
        <td className=' px-4 py-2 text-center'>
          <span>{model}</span>
        </td>
      </Wrapper>
    )
  );
};
export { Car };
