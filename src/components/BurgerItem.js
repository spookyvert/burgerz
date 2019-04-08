import React from 'react';

const BurgerItem = (props) => {

  console.log("here" + JSON.stringify(props.burgers) + 0 + props.burgers)

  return (
    <div>
      <div className="BurgerItem">
        {props.burger.name}
      </div>
      <div className="BurgerBottomBun">
        <button onClick={(e) => {props.handleShow(props.burger)} }>Show</button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem