import React from 'react'

// here we have not used props.name or props.tech we destructure it  by using {} and put name , tech directly within curly breses and 
// for better readability and good code we provide default value to in this case we use React.js
const Card = ({name, tech= "React.js"}) => {
    console.log("props", name);
    
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img
      className="w-full h-full object-cover "
      src="https://tse3.mm.bing.net/th?id=OIP.fdiFOR7Mrub-dfom4fkGOQAAAA&pid=Api&P=0&h=180"
      alt="Profile Picture"
    />
    <div className="px-6 py-4">
        {/* we can use {props.name} this but it is better if we use destructuring and use direct within {} */}
      <div className="font-bold text-xl mb-2">{name} Singh</div>
      <p className="text-gray-700 text-base">
        A passionate web developer with a love for React, animations, and creating smooth user experiences.
      </p>
    </div>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-blue-200 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded">
        #webdev
      </span>
      <span className="inline-block bg-green-200 text-green-800 text-xs font-semibold mr-2 px-2.5 py-1 rounded">
        #{tech}
      </span>
      <span className="inline-block bg-purple-200 text-purple-800 text-xs font-semibold px-2.5 py-1 rounded">
        #frontend
      </span>
    </div>
  </div>
  )
}

export default Card