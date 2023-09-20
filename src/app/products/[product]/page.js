import Link from "next/link";

const getData=async ()=>{

  let data=await fetch('http://localhost:3000/api/user')
  data=await data.json();
  return data;
}


const page = async ({params}) => {
  let response= await getData()
let productdata=response[+params.product-1]
let {title,price,description,rating}=productdata;

  return (
  
    <div className="mx-auto my-auto w-screen">
    
    <h1>product {params.product} data</h1>
    <h2>title : {title}</h2>
    <h2>price : {price}</h2>
    <h3>description : {description}</h3>
    <h4>rating: {rating}</h4>
    <Link href='/products'>go to product page</Link>
    
    </div>
    
  )
}

export default page