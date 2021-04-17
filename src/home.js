import './App.css';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';

function Home() {
  return (
    <div>
      <header className="App-header">
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="secondary">
        Primary
      </Button>
      <div>HELLO WORLD</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;