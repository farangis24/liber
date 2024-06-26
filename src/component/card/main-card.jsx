import React from "react";

export const Card = ({ name, img, title, text, icon, stars }) => {
  return (
    <div>
      <h3 className="text">{text}</h3>
      <img className="img" src={img} alt="img" />
      <h3 className="name text-lg font-bold mb-2">{name}</h3>
      <p className="title text-blue-800 mb-1">{title}</p>
      <div className="flex gap-3 ">
        <span className="stars pl-2">{stars}</span>
        <span className="icon">{icon}</span>
      </div>
    </div>
  );
};
