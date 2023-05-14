import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"

const Main = () => {
  return <header className="App-header">
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
}

function App() {
  return (
      <BrowserRouter>
    <div className="App">
      <Link to="/111">Link</Link>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/123" element={<h1>123</h1>}/>
        <Route path="/111" element={<h1>111</h1>}/>
      </Routes>
    </div>
      </BrowserRouter>
  );
}

export default App;
