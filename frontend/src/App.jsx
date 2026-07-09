
import './App.css'
import { useEffect, useState } from 'react';
import Health from './Health';
import Form from '../Form';

function App() {
  const [isConnecting, setIsConnecting] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [history, setHistory] = useState([]);

  async function get_history() {
    try {
      const response = await fetch(import.meta.env.VITE_BACKEND + "/api/history");
      const data = await response.json();

      setHistory(data.history);
    } catch (error) {
      console.error(error)
    }
  }

  //Run once when the page loads//
  useEffect(()=>{
    get_history();
  }, [])

  //Every time history state changes, Print it to console//
  useEffect(()=>{
    console.log(history)
  }, [history])

  return (
    <>
      <h1>Week 4 Day 3 Assignment</h1>
      <Health />
      <Form />
      <h2>Order History</h2>
      {history.map((order) =>(
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Customer ID: {order.customer_id}</p>
          <p>Status: {order.status}</p>
          <p>Ordered At: {order.ordered_at}</p>
        </div>
      ))}
    </>
  )
}

export default App
