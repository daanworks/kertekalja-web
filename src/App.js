import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import {useEffect} from "react";
import Footer from "./components/Footer";
import styled from "styled-components";



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
      <Footer />
      <Bottom />
    </div>
  );
}

const Bottom = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 52px;
    background: #0A1722;
}
`

export default App;
