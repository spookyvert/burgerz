import React from 'react';

const BurgerDisplay = (props) => {

  return (
    <div className="BurgerDisplay">
      <img src={props.burger.imgURL}/>
      <br/>
      <h1>{props.burger.name}</h1>
      <br/>


        {props.burger.category === "Relatable" ? <select id={props.burger.id} onChange={ (e) => {props.handleCategoryChange(e)} }>

        <option value="Bougie">Bougie</option>
        <option value="Relatable">Relatable</option>
        </select>: <select id={props.burger.id} onChange={ (e) => {props.handleCategoryChange(e)} }> <option value="Bougie">Bougie</option> <option value="Relatable">Relatable</option> </select>}

    </div>
  )
}

export default BurgerDisplay