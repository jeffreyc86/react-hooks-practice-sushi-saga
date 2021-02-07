import React, {useState} from "react";
import Form from "./Form"

function Table({ plates, budget, addBudget}) {
  // renders an empty plate for every element in the array
  const [form, setForm] = useState(false)

  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));

  const handleClick = () => {
    setForm(form => !form)
  }

  const addMoney = (amount) => {
    setForm(false)
    addBudget(amount)
  }

  return (
    <>
      <div className="remaining">
        <h1>
          You have: ${budget} remaining!
        </h1>
      <button onClick={handleClick}>{!form ? "Add Money" : "Nevermind"}</button>
      {!form ? null : <Form addMoney={addMoney}/>}
      </div>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
