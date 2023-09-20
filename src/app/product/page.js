
// import { get } from 'mongoose';
import React from 'react'
import Button from './Button';
import Link from 'next/link';


const getData = async () => {
  try {
    let data = await fetch('http://localhost:3000/api/product', {
      cache: 'no-cache'
    })
    data = data.json()
    return data;
  } catch (error) {
    console.log(error)
  }
}


const page = async () => {
  const prod = await getData();
  console.log(prod)
  return (
    <div className="container">
      <div className=' container flex justify-between align-items-center'>
        <h2 className='text-2xl text-center mt-3 mb-3 ml-3 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full'>All Products</h2>
        <Link href='/product/addproduct'><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
          Add Product
        </button></Link>

      </div>

      <div className="flex flex-col">

        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">


              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Phone Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Rating
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Remove
                    </th>


                  </tr>
                </thead>
                <tbody>
                  {
                    prod.map((elem) => {
                      const { price, title, rating, _id } = elem;
                      return (

                        <tr className="border-b dark:border-neutral-500 ">
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {title}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 ">${price}</td>
                          <td className="whitespace-nowrap px-6 py-4">{rating}</td>
                          <td className="whitespace-nowrap"><Button data={_id} /></td>
                        </tr>
                      );
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default page