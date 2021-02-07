import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushis, increasePage, deductFromBill, budget}) {

  function deductAmount(sushi){
    deductFromBill(parseInt(sushi.price))
  }


  const sushiPlates = sushis.map(sushi => {
    return <Sushi key={sushi.id} sushi={sushi} deductAmount={deductAmount} budget={budget}/>
  })

  function changePage(){
    increasePage()
  }

  return (
    <div className="belt">
      {sushiPlates}
      <MoreButton changePage={changePage}/>
    </div>
  );
}

export default SushiContainer;
