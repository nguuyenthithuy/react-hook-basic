import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav.js';
const App = () => {
  let name = 'Thủy';
  let obj = { name: 'Thủy', age: 19 }
  let link = ' https://www.facebook.com/profile.php?id=100016430322265 '
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Nguyễn Thị Thủy with Hook </h1>

        <p style={{ color: 'red', fontSize: '20px', marginTop: '15px' }}>{JSON.stringify(obj)}</p>

        <a href={link} target="_blank"> Nhấn vào đây để xem facebook</a>
      </header>
    </div>
  );
}

export default App;
