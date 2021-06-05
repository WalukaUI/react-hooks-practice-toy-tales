import React, { useState } from "react";

function ToyForm({addaToytoDB}) {
  const[newToy,setNewToy]=useState({
    name:"",
    image:""
  })

  function setvalue(e){
    const newVal={...newToy,[e.target.name]:e.target.value}
    setNewToy(newVal)
  }
  function addAToy(e){
   e.preventDefault()
   addaToytoDB(newToy)
  }
  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={(e)=>addAToy(e)}>
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={newToy.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={setvalue}
        />
        <br />
        <input
          type="text"
          value={newToy.image}
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={setvalue}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
