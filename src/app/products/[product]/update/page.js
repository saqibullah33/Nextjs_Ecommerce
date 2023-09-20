'use client'

import { useState } from 'react';
import { useEffect } from 'react';
import Link from 'next/link';
 
const page = ({params}) => {
    let productid=params.product
      
    const [title, settitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setdescription] = useState('');
    

   //update value


   const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'title':
        settitle(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'description':
        setdescription(value);
        break;
    }
    console.log(title,price,description)
  };

//fetchdata
    useEffect(async ()=>{
        let data = await fetch(`http://localhost:3000/api/user/${productid}`)
        data =await  data.json();
        settitle(data.title)
        setPrice(data.price)
        setdescription(data.description)

    },[])
     //calling put api
  const Update= async ()=>{
    let data= await fetch('http://localhost:3000/api/user/'+productid,{
     method:"PUT",
     body:JSON.stringify({title,price,description})
    });
 
    data= await data.json()
    console.log(data)
 
   }
 
  return (
    <div>
        <h1>update {params.product}</h1>

        <label>Name</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
        className='border'
      />
      <br></br>
      <label>Age</label>
      <input
        type="number"
        name="price"
        value={price}
        onChange={handleChange}
        className='border'
      />
      <br></br>
      <label>Gmail</label>
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleChange}
        className='border'
      />
      <br></br>
 <button onClick={Update}>update</button>
<Link href={`/products`}> <button >view product</button></Link>



    </div>
  )
}

export default page