'use client'
import React from 'react'

const Button = ({data}) => {
    
    const deleteData= async ()=>{
        const url='http://localhost:3000/api/product/'+data;
        const Message= await fetch(url,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"}
        })
        alert("succuess")
        //function to reload the page
        window.location.reload(true);
    }
  return (
    <button onClick={deleteData} className=' bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'>Delete</button>

  )
}

export default Button