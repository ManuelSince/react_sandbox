import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Todos } from './components/Todos';
import { ChangeColor } from './components/exercices/ChangeColor';
import { ConditionnalRendering } from './components/exercices/ConditionnalRendering';
import { Counter } from './components/exercices/Counter';
import { Formulaire } from './components/exercices/Formulaire';
import { ListeCourses } from './components/exercices/ListeCourses';
import { Toggle } from './components/exercices/Toggle';

function App() {
  const handleClick = () => {
    console.log('clicked');
  };
  return (
    <div className='flex flex-col items-center max-w-1280 bg-linear h-full border-x overflow-auto'>
      <Container className='bg-grey rounded'>
        <Button className='rounded' onClick={handleClick}>
          click me
        </Button>
      </Container>
      <Container className='bg-grey rounded'>
        <Counter />
      </Container>
      <Container className='bg-grey rounded'>
        <Toggle />
      </Container>
      <Container className='bg-grey rounded'>
        <Formulaire />
      </Container>
      <Container className='rounded'>
        <ChangeColor />
      </Container>
      <Container className='rounded'>
        <ConditionnalRendering />
      </Container>
      <Container className='rounded'>
        <ListeCourses />
      </Container>
      <Container className='bg-green-400 rounded'>
        <Todos />
      </Container>
    </div>
  );
}

export default App;
