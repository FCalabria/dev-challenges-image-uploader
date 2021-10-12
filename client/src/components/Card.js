import React from "react";

function Card({children}) {
  return <div className="flex flex-col items-center bg-white px-8 py-9 rounded-xl shadow-md font-rounded">
    <h1 className="mb-6 text-gray-700 font-medium text-lg">{children.title}</h1>
    <div>{children.content}</div>
  </div>
}

export default Card