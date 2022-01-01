import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {

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
