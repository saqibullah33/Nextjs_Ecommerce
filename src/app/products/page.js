import Link from "next/link";

const getData=async ()=>{

    let data=await fetch('http://localhost:3000/api/user')
    data=await data.json();
    return data;
}

const product=async ()=>{
    let response= await getData()
    // console.log(response)
    return (
        <>
        <h1 className="text-center">Products list</h1>
        <Link href='/products/1'>product 1</Link>
        {
            response.map((elem)=>{
                return (
                    <div>
                      <h1>{elem.title}   || <span>  <Link href={`/products/${elem.id}/update`}>edit</Link></span></h1>
                    </div>
                );
            })
        }
        </>
    );
}

export default product