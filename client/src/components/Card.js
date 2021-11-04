import React from "react";

function Card({children}) {
  return <div className="flex flex-col items-center bg-white px-8 py-9 rounded-xl shadow-md font-rounded max-w-lg">
    { children.icon && <span style={{width: '35px'}} className="fill-current text-green-600">{children.icon}</span>}
    <h1 className="mb-3 text-gray-700 font-medium text-lg">{children.title}</h1>
    {children.content}
  </div>
}

export default Card