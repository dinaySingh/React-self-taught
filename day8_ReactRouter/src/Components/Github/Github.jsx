import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    //++++++++++++ if we use this method the page will take time to load +++++++++++++++

//     const [data, setdata] = useState([])
// useEffect(() => {
// fetch("https://api.github.com/users/hiteshchoudhary")
// .then(res => res.json())
// .then(data => {
//     console.log(data);
// setdata(data)
    
// })
// },[])

const data = useLoaderData()

  return (
    <div className='bg-gray-600 text-center m-4 text-white text-3xl'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="git picture" width={200}/></div>
  )
}

export default Github

// ++++++++++if we use this method then it will instantlly load and show data +++++++++++++++
export const githubInfoLoader = async () => {
   const res = await fetch("https://api.github.com/users/hiteshchoudhary")
   return res.json()
}