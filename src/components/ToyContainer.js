import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({Toys,deleteCard,changeLikes}) {
  const toysCards=Toys.map((e)=><ToyCard Tcard={e} key={e.name} deleteCard={deleteCard} changeLikes={changeLikes}/>)
  return (
    <div id="toy-collection">{toysCards}</div>
  );
}

export default ToyContainer;
