import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://v6.exchangerate-api.com/v6/b8a14f8e168b58522e2af911/latest/${currency}`)
        .then((res)=> res.json() )
        .then((res)=>setData(res[currency]))
        console.log(data);
        
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo