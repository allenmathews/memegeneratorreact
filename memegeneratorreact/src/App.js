import logo from './logo.svg';
import './App.css';
import Header from '../components/header';
//
function App() {
    return (
      <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        className = "troll-face"
        alt = "logo" />
        <p>
        The header goes here</p> <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
          <Header className="header"/>
        Meme Generator </a> </header > </div>
    );
}

export default App;