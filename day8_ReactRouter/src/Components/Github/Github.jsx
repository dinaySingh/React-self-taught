import React, { useState, useEffect } from 'react'

function Github() {
    const [data, setdata] = useState([])
useEffect(() => {
fetch("https://api.github.com/users/hiteshchoudhary")
.then(res => res.json())
.then(data => {
    console.log(data);
setdata(data)
    
})
},[])


  return (
    <div className='bg-gray-300 text-center m-4 text-white text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" width={200}/></div>
  )
}

export default Github