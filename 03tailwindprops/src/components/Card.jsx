import React from 'react'

function Card(props) {
  console.log("props", props);
  return (
    <div className="relative h-[500px] w-full rounded-md">
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3OvcS9D4HfgBVOkvEY8mSQi59TmX8MVr7_A&s" 
        alt="AirMax Pro"
        className="w-full h-full object-cover rounded-md"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>

      <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">{props.username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
        </p>
        <button className="mt-2 inline-flex items-center px-4 py-2 bg-white text-sm font-semibold text-black rounded hover:bg-gray-200">
          {props.btn || "hehe"}
        </button>
      </div>
    </div>
  )
}

export default Card
