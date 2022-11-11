import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react';
import Todo from './views/Todo';


const App = () => {

  //state
  let [name, setName] = useState('Thủy'); // [a1,b1,c1.....]

  let [todos, setTodo] = useState([
    { id: 'todo1', title: 'Teacher' },
    { id: 'todo2', title: 'Doing home work' },
    { id: 'todo3', title: 'Playing game' }
  ])

  // adress chỉ là một cái để ghi thôi k phai địa chỉ

  const handleOnClickme = (event) => {
    // hook not merge state
    // ...spread synstax arrayjs
    if (!Adress) {
      alert('Missing input adress')
      return;
    }
    let newtodo = { id: 'abc', title: Adress }

    setTodo([...todos, newtodo])
    setAdress('')
  }

  const [Adress, setAdress] = useState('');

  const handleOnchaneInput = (event) => {
    setAdress(event.target.value)
  }
  // re-render
  //for - for each => map

  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Nguyễn Thị {name} with Hook </h1>
        <Todo
          myData={todos}
        />
        <input type="text" value={Adress} onChange={(event) => handleOnchaneInput(event)} />
        <button type='button' onClick={(event) => handleOnClickme(event)}>Click</button>
      </header>
    </div>
  );
}

export default App;
