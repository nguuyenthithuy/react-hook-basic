import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react';
import Todo from './views/Todo';


const App = () => {

  //state
  let [name, setName] = useState('Thủy'); // [a1,b1,c1.....]

  let [todos, setTodo] = useState([
    { id: 'todo1', title: 'Teacher', type: 'Thủy' },
    { id: 'todo2', title: 'Doing home work', type: 'Thủy' },
    { id: 'todo3', title: 'Playing game', type: 'Đạt' },
    { id: 'todo4', title: 'Reading books', type: 'Đạt' }
  ])

  // adress chỉ là một cái để ghi thôi k phai địa chỉ

  const handleOnClickme = (event) => {
    // hook not merge state
    // ...spread synstax arrayjs
    if (!Adress) {
      alert('Missing input adress')
      return;
    }
    let newtodo = {
      id: Math.floor((Math.random() * 10000) + 1),
      title: Adress,
    }

    setTodo([...todos, newtodo])
    setAdress('')
  }

  const [Adress, setAdress] = useState('');

  const handleOnchaneInput = (event) => {
    setAdress(event.target.value)
  }

  // re-render
  //for - for each => map

  const deleteDataTodos = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter(item => item.id !== id);
    setTodo(currentTodos)

  }

  return (
    <div className="App">

      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Nguyễn Thị {name} with Hook </h1>
        <Todo
          todos={todos}
          title={'All Title'}
          deleteDataTodos={deleteDataTodos}
        />
        <Todo
          todos={todos.filter(item => item.type === 'Thủy')}
          title={'Title Thủy'}
          deleteDataTodos={deleteDataTodos}
        />
        <input type="text" value={Adress} onChange={(event) => handleOnchaneInput(event)} />
        <button type='button' onClick={(event) => handleOnClickme(event)}>Click</button>
      </header>
    </div>
  );
}

export default App;
