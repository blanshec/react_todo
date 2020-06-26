import React, { Fragment, useState } from 'react';

type formElemType = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string,
  complete: boolean,
}

function App(): JSX.Element {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleSubmit = (event: formElemType): void => {
    event.preventDefault();
    addTodo(value);
    setValue('');
  }

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  }

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  }

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = [...todos];
    if (index > -1) {
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  }

  return (
    <Fragment>
      <h1>Welcome to Most Boring of Apps</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='textfield' value={value} onChange={event => setValue(event.target.value)} required></input>
        <button type="submit" >Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo, index: number) => {
          return <Fragment key={index}>
            <div style={{ textDecoration: todo.complete ? 'line-through' : '' }}>{todo.text}</div>
            <button type='button' onClick={() => completeTodo(index)}> {todo.complete ? 'Complete' : 'Incomlete'} </button>
            <button type='button' onClick={() => removeTodo(index)}> Remove from list </button>
          </Fragment>
        })}

      </section>
    </Fragment>
  );
}

export default App;
