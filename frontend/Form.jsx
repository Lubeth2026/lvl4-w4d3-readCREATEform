
import React, { useState } from 'react'

function Form() {
    const [customerId, setCustomerId] = useState("");
    const [status, setStatus] = useState("");
    
    async function createOrder() {
        try {
            console.log({customer_id: customerId, status: status})
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