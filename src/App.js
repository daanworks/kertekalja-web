import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {useEffect} from "react";



function App() {

  useEffect(() => {
    document.title = 'Kertek Alja'
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = '/public/favicon.png?v=2';
  }, [])

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
