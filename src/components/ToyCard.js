import React from "react";

function ToyCard({Tcard,deleteCard,changeLikes}) {

  function handleDelete(e){
    e.preventDefault()
    deleteCard(Tcard.id)
  }
  function handleLike(e){
    e.preventDefault()
    changeLikes(Tcard.id,Tcard.likes)
  }
  return (
    <div className="card">
      <h2>{Tcard.name}</h2>
      <img
        src={Tcard.image}
        alt={`${Tcard.name}`}
        className="toy-avatar"
      />
      <p>{`${Tcard.likes}` } Likes </p>
      <button className="like-btn"onClick={(e)=>handleLike(e)}>Like {"<3"}</button>
      <button className="del-btn" onClick={(e)=>handleDelete(e)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
