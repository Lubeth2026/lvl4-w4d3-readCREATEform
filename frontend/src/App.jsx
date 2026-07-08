
import './App.css'
import { useState } from 'react';
import Health from './Health';

function App() {
  const [isConnecting, setIsConnecting] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [history, setHistory] = useState([]);

  return (
    <>
      <Health />
      <h1>Week 4 Day 3 Assignment</h1>
    </>
  )
}

export default App
