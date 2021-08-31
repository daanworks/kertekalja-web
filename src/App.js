import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {useEffect} from "react";



function App() {

  useEffect(() => {
    document.title = 'Kertek Alja Rendezvényhelyszín'
  }, [])

  return (
    <div className="App">
        <Header />
        <Main />
    </div>
  );
}

export default App;
