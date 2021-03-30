import './App.css';

import Header from './Components/Header/Header';
import LogoScroll from './Components/LogoScroll/LogoScroll';
import Main from './Components/Main/Main';
import OurSolution from './Components/OurSolution/OurSolution';


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <LogoScroll/>
      <OurSolution/>
   
    </div>
  );
}

export default App;
