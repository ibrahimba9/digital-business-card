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
    <>
      <h1>Hello! This is my <strong>Digital Business card</strong> project with ReactJS!</h1>
      <PersonalDetails />
      <About />
      <Skills />
    </>
  )
}

export default App
