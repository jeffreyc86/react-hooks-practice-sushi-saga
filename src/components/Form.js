import React, {useState} from "react"

function Form({addMoney}) {

    const [amount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
       addMoney(parseInt(amount))
       setAmount(0)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="amount">Add Money</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min={0}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form