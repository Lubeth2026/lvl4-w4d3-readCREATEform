
import React, { useState } from 'react'

function Form({get_history}) {
    const [customerId, setCustomerId] = useState("");
    const [status, setStatus] = useState("");
    
    async function createOrder() {
        try {
            const newOrder = {customer_id: customerId, status: status};
            const response = await fetch(import.meta.env.VITE_BACKEND + "/api/orders", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newOrder)
            })
            const data = await response.json()
            console.log(data)
            get_history()
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
        <h2>Create New Order</h2>
        <input type="number" placeholder="Customer ID" value={customerId} 
        onChange={(event)=> setCustomerId(event.target.value)} />
        <input type="text" placeholder="Status" value={status} 
        onChange={(event)=> setStatus(event.target.value)} />
        <button onClick={createOrder} >Create Order</button>  
    </div>
  )
}

export default Form