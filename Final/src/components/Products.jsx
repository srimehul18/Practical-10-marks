import { useState, useEffect } from "react"
import React from 'react'

const Products = () => {
    const [data,setData] = useState("")
    const API = "https://dummyjson.com/products"
 useEffect(()=>{
    fetch(API)
        .then(res => res.json())
        .then(res => setData(res.Products))
        .catch(console.error())
 },[])
      
        
        
        
    
    
    

  return (
    <div>Products
        <div>
        {data.map((item) => (
            <div key={item.id}>
                <img src={item.thumbnail}></img>
            </div>
        ))

        }
        </div>
    </div>

  )
}

export default Products