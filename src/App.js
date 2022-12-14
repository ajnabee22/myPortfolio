import React,{useState,useEffect} from 'react';
import './App.css';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Fotter from './components/fotter/fotter';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Projects from './components/projects/projects';
import Logo from './logoVishal2.png';
import Zoom from 'react-reveal/Zoom';

function App() {
  const [ loading,Setloading] = useState(true);
  useEffect(() => {
   setTimeout(() => {
    Setloading(false)
   },2000)
  },[])
  return (
    <div className="App">
    { loading ?  
    <div className="app__loader">
    <div className="app__imageParent">
    <svg height="130" width="130" className="app__loaderSvg">
      		<polygon  points="55 3,105 30,105 87,55 120,3 87,3 30" 
      	 className="app__loaderSvgHex"/>
    	</svg>
    <Zoom><div className="app__loaderImageParent"><img className="app__loaderImage" src={Logo} alt=""/></div></Zoom>
    </div>
  </div>
    : <>
      <Header />
      <Intro />
      <Projects />
      <About />
      <Contact />
      <Fotter />
      </> }
    </div>
  );
}

export default App;