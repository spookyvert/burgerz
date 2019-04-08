import React from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  console.log("yooo" + props.burgers)

  const allBurgers = props.burgers.map(burger => {

    return <BurgerItem key={burger.id} handleShow={props.handleShow} burger={burger} />
  })

  return (

    <div className="BurgerList">
      {allBurgers}
    </div>
  )
}

export default BurgerList