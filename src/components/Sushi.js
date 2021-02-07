import React, {useState} from "react";

function Sushi({sushi, deductAmount, budget}) {

  const [eaten, setEaten] = useState(false)

  function handleClick () {
    if (budget >= sushi.price && eaten === false){
        setEaten(eaten => !eaten)
        deductAmount(sushi)
      }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name + " Sushi"}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
