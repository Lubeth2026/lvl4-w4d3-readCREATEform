
import './App.css'
import { useEffect, useState } from 'react';
import Health from './Health';
import Form from '../Form';

function App() {
  const [isConnecting, setIsConnecting] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [history, setHistory] = useState([]);
  //Every order needs to remember selected status STATE//
  const [statusChanges, setStatusChanges] = useState({});

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

  async function update_order(order) {
    try {
      const url = import.meta.env.VITE_BACKEND + "/api/orders/" + order.id;
      const response = await fetch(url, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          customer_id: order.customer_id,
          status: statusChanges[order.id]
        })
      });
      await get_history();
    } catch (error) {
      console.error(error)
    }
  }

  async function delete_order(order) {
    try {
      const url = import.meta.env.VITE_BACKEND + "/api/orders/" + order.id;
      const response = await fetch(url, {method: "DELETE",});
      await get_history();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h1>Order Log</h1>
      <Health />
      <Form get_history={get_history} />
      <h2>Order History</h2>
      {history.map((order) => (
        <div key={order.id}>
          <p>Order ID: {order.id}</p>
          <p>Customer ID: {order.customer_id}</p>
          <p>Status: </p>
          <select
            value={statusChanges[order.id] || order.status}
            onChange={(event) => {
              setStatusChanges({
                ...statusChanges,
                [order.id]: event.target.value,
              });
            }}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
            <option value="returned">Returned</option>
            <option value="delivered">Delivered</option>
            <option value="shipped">Shipped</option>
          </select>
          <p>Ordered At: {order.ordered_at}</p>

          <button onClick={() => update_order(order)}>Update</button>
          <button onClick={() => delete_order(order)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App
