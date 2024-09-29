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
import { Cars } from './components/exercices/cars/Cars';
import { ListeNoms } from './components/exercices/listeNoms';
import { Header } from './components/exercices/Header';
import { UseEffectExample } from './components/exercices/useEffectExercices/useEffectExample';
import { UseEffectCleanUp } from './components/exercices/useEffectExercices/useEffectCleanUp';
import { FetchApi } from './components/exercices/useEffectExercices/FetchApi';

function App() {
  const noms = ['manuel', 'louis', 'cedric', 'momo', 'mamadou', 'ludo'];
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
      <Container className='rounded'>
        <Cars />
      </Container>
      <Container className='rounded'>
        <ListeNoms names={noms} />
      </Container>
      <Container className='rounded bg-red-400'>
        <Header>useEffect example</Header>
        <UseEffectExample />
      </Container>
      <Container className='rounded bg-blue-400'>
        <Header>afficher timer</Header>
        <UseEffectCleanUp />
      </Container>
      <Container className='rounded bg-green-400'>
        <Header>Fetch posts</Header>
        <FetchApi />
      </Container>
      <Container className='rounded bg-red-400'>
        <Header>4</Header>
      </Container>
      <Container className='rounded bg-blue-400'>
        <Header>5</Header>
      </Container>
      <Container className='rounded bg-green-400'>
        <Header>6</Header>
      </Container>
      <Container className='rounded'>
        <Todos />
      </Container>
    </div>
  );
}

export default App;
