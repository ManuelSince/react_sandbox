import { ChangeEvent, useRef, useState, type ReactElement } from 'react';
import React from 'react';
import type { FilterProps, Filter, Todo } from './types';

const Filter = (props: FilterProps): ReactElement => {
  const buttons: Filter[] = [
    { prettyName: 'Toutes les tâches', name: 'all' },
    { prettyName: 'Tâches complétées', name: 'checked' },
    { prettyName: 'Tâches non complétées', name: 'unchecked' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const val = e.currentTarget.value;
    props.setFilter(val);
  };
  return (
    <div className='flex gap-1 mb-2 mt-2 justify-center border py-2 px-4 rounded'>
      {buttons.map((btn) => (
        <button
          key={btn.name}
          className={`bg-blue-400 text-white font-semibold border rounded w-10 px-4 py-2 ${
            props.filter === btn.name ? 'border-green' : ''
          }`}
          value={btn.name}
          onClick={handleClick}
        >
          {btn.prettyName}
        </button>
      ))}
    </div>
  );
};
const Todos = (): ReactElement => {
  const [todos, setTodos] = useState<Todo[]>([
    { task: 'manger', status: false, description: 'salade de tomates' },
    { task: 'boire', status: true, description: '1 litre de citronnade' },
    { task: 'chier', status: false },
    { task: 'faire le ménage', status: false },
    { task: 'réviser', status: true },
    { task: 'epargner', status: true },
    { task: 'travailler', status: false },
  ]);
  const [todo, setTodo] = useState({ task: '', status: false });
  const [filter, setFilter] = useState<string>('all');
  const [taskOpen, setTaskOpen] = useState<number | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo({ task: e.target.value, status: false });
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    if (e.key === 'Enter') {
      if (todo.task) setTodos([...todos, todo]);
      else alert('veuillez définir le nom de la tâche');
      setTodo({ task: '', status: false });
    }
  };
  const handleCheck = (e: ChangeEvent<HTMLInputElement>, index: number): void => {
    const raw = [...todos];
    raw[index] = { task: e.target.name, status: e.target.checked };
    setTodos(raw);
  };
  const handleDelete = (index: number): void => {
    const aT = [...todos];
    aT.splice(index, 1);
    setTodos(aT);
  };
  const handleUpdate = (index: number): void => {
    const aT = [...todos];
    if (todo.task) {
      aT[index].task = todo.task;
      setTodos(aT);
    } else {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
    setTodo({ task: '', status: false });
  };
  const filterCallBack = (item: Todo): boolean => {
    switch (filter) {
      case 'all':
        return true;

      case 'checked':
        return item.status === true;

      case 'unchecked':
        return item.status === false;

      default:
        return false;
    }
  };
  return (
    <div onKeyDown={(e) => handleKeyDown(e)}>
      <div className='flex justify-center'>
        <h1 className='font-40 font-bold text-white'>Liste de tâches</h1>
      </div>
      <div className='flex justify-between'>
        <input type='text' className='px-4 py-2 w-full' value={todo.task} onChange={handleInput} ref={inputRef} />
        <button
          onClick={() => {
            if (todo.task) setTodos([...todos, todo]);
            else alert('veuillez définir le nom de la tâche');
            setTodo({ task: '', status: false });
          }}
          className='ml-1 px-4 py-2 whitespace-nowrap'
        >
          Ajouter la tâche
        </button>
      </div>
      <Filter setFilter={setFilter} filter={filter} />
      <ul className='flex flex-col items-center w-full'>
        {todos &&
          todos.filter(filterCallBack).map((t, idx) => {
            return (
              <li key={idx} className='flex items-center mb-1'>
                <input
                  type='checkbox'
                  name={t.task}
                  value={t.task}
                  checked={t.status}
                  onChange={(e) => handleCheck(e, idx)}
                  className=''
                />
                <div
                  id='task'
                  onClick={() => setTaskOpen((task) => (task === idx ? null : idx))}
                  className={`ml-1 px-4 py-2 bg-blue-400 w-15 font-20 font-bold ${
                    t.status === true ? 'crossline' : 'bg-red-400'
                  }`}
                >
                  <span className={`text-center ${t.description ? 'green-bar' : ''}`}>{}</span>

                  <span>{t.task}</span>

                  {taskOpen === idx && t.description && (
                    <div>
                      <div
                        id='task-description'
                        className={`flex items-center justify-center text-white ${
                          taskOpen === idx ? 'h-20' : 'hidden'
                        }`}
                      >
                        {t.description}
                      </div>
                    </div>
                  )}
                </div>
                <button
                  className='bg-red-500 px-4 py-2 rounded ml-1 text-white w-10 border-red-400'
                  onClick={() => handleDelete(idx)}
                >
                  delete
                </button>
                <button
                  className='bg-blue-400 px-4 py-2 rounded ml-1 text-white w-10 '
                  onClick={() => handleUpdate(idx)}
                >
                  update
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export { Todos };
