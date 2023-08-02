import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          textDecoration: "underline",
          color: "yellow",
          boxShadow: "0px 0px 10px lavender",
          padding: "10px",
          borderRadius: "5px"
        }}>Lokesh Sharma</h1>
      </header>
    </div>
  );
}

export default App;
