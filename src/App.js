import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
import { useState } from 'react';


const App = () => {
  let [name, setName] = useState('Thủy'); // [a1,b1,c1.....]

  const handleOnClickme = (event) => {
    setName(Adress)
  }

  const [Adress, setAdress] = useState('');

  const handleOnchaneInput = (event) => {
    setAdress(event.target.value)
  }


  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Nguyễn Thị {name} with Hook </h1>

        <input type="text" value={Adress} onChange={(event) => handleOnchaneInput(event)} />
        <button type='button' onClick={(event) => handleOnClickme(event)}>Click</button>
      </header>
    </div>
  );
}

export default App;
