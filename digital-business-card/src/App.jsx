import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import PersonalDetails from './components/PersonalDetails';
import About from './components/About';
import Skills from './components/Skills';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='header-container'>
        <h1>Hello! This is my Digital Business Card project with ReactJS!</h1>
      </div>
      <PersonalDetails />
      <About />
      <Skills />
      <div className='footer-container'>
        Icons by <a target="_blank" href="https://icons8.com">Icons8</a>
      </div>
    </div>
  )
}

export default App
