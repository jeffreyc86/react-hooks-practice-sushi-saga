import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [page, setPage] = useState(1)
  const [budget, setBudget] = useState(100)
  const [plates, setPlates] = useState([])

  useEffect(fetchRequest, [page])

  if (page === 26){
    setPage(1)
  }

  function changePage() {
    console.log("clicked")
    setPage(page => page+1)
  }

  function fetchRequest() {
    fetch(`${API}/?_limit=4&_page=${page}`)
    // fetch(API)
    .then(res => res.json())
    .then(sushiArr => {
        setSushis(sushiArr)
    })
  }

  function deductFromBill(amount){
    setBudget(budget => budget - amount)
    const newPlatesArray = [...plates, 1]
    setPlates(newPlatesArray)
  }

  function addBudget(amount) {
    setBudget(budget => budget+amount)
  }


  return (
    <div className="app">
      <SushiContainer sushis={sushis} increasePage={changePage} deductFromBill={deductFromBill} budget={budget}/>
      <Table budget={budget} plates={plates} addBudget={addBudget}/>
    </div>
  );
}

export default App;
