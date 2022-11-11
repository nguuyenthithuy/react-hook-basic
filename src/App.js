import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
const App = () => {
  let name = 'Thủy';

  const handleOnClickme = (event) => {
    console.log('>>>click me', event.target.value)
  }


  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Nguyễn Thị {name} with Hook </h1>

        <input type="text" value="Thủy" onClick={(event) => handleOnClickme(event)} />
        <button type='button' onClick={(event) => handleOnClickme(event)}>Click</button>
      </header>
    </div>
  );
}

export default App;
