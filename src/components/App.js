import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [toys, setToys] = useState([])
  const [showForm, setShowForm] = useState(false);
  const URL = "http://localhost:3001"

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(`${URL}/toys`, requestOptions)
      .then(r => r.json())
      .then(j => setToys(j))
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }
  function addaToytoDB(object) {
    const requestOptionsPost = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(object)
    };
    fetch(`${URL}/toys`, requestOptionsPost)
      .then(res => res.json())
      .then(j => {
        const toysWithNewToy = [...toys, j]
        setToys(toysWithNewToy)
      })
  }

  function deleteCard(Id) {
    const requestOptionsPost = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }
    fetch(`${URL}/toys/${Id}`, requestOptionsPost)
      .then(res => res.json())
      .then(j => {
        const newToysList = toys.filter((e) => e.id !== Id)
        setToys(newToysList)
      })
  }

  function changeLikes(Id, currentLikes) {
    let increseLikes = currentLikes + 1
    const requestOptionsPost = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ likes: increseLikes })
    };
    fetch(`${URL}/toys/${Id}`, requestOptionsPost)
      .then(res => res.json())
      .then(j => {
        const newArray = toys.filter((e) => e.id !== Id)
        const newwithlikes = [...newArray, j]
        setToys(newwithlikes)
      })
  }
  return (
    <>
      <Header />
      {showForm ? <ToyForm addaToytoDB={addaToytoDB} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer Toys={toys} deleteCard={deleteCard} changeLikes={changeLikes} />
    </>
  );
}

export default App;
