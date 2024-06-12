import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
   
    const [data,setData]=useState({}) //State to store the currency 

     useEffect(()=>{
        let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json` //Using an API To get the currencies  for different countries
     fetch(url).then(res=>res.json())
     .then((res)=>setData(res[currency])) //Setting the data to the state for whatever currency is passed in the argument we will get the same currency as the key
    },[currency])

    return data;
}

export default useCurrencyInfo;