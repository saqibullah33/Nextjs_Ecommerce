'use client'
import { useState } from "react";
import Link from "next/link";
const page = () => {
  // Create a state variable to store input values
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    rating: '',
    category: '',
    description: '',
  });

  //handle input
  const handleInputChange = (e) => {
    console.log(e.target.name)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  //submit data

  const submitData = async (e) => {
    e.preventDefault();
    console.log("hello")
    const data = await fetch('http://localhost:3000/api/product', {
      method: "post",
      body: JSON.stringify(formData)

    })

    alert("data submitted")
  }

  //clear form
  const clearform = () => {
    setFormData({
      title: '',
      price: '',
      rating: '',
      category: '',
      description: '',
    });

  }
  console.log(formData.title + " " + formData.category)
  return (
    <div className="container mx-auto my-auto">

      <div className="block pl-2 font-semibold text-xl self-start text-gray-700 flex justify-between align-items-center">
        <p className="leading-relaxed text-center mt-3 bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
          Add Product
        </p>
        <Link href='/product'><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-3">
        Move to Product Page
        </button></Link>
      </div>
      <div className="divide-y divide-gray-200">
        <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
          <div className="flex flex-col">
            <label className="leading-loose">Title</label>
            <input
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              type="text"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            // placeholder="Event title"
            />
          </div>
          <div className="flex flex-col">
            <label className="leading-loose">Price</label>
            <input
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              type="text"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"

            />
          </div>

          <div className="flex flex-col">
            <label className="leading-loose">Rating</label>
            <input
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              type="number"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"

            />
          </div>

          <div className="flex flex-col">
            <label className="leading-loose">Catogery</label>
            <input
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              type="text"
              className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"

            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="leading-loose"
            >
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              id="message"
              rows={4}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

              defaultValue={""}
            />
          </div>
        </div>
        <div className="pt-4 flex items-center space-x-4">
          <button onClick={submitData} type="submit" className="bg-blue-500 mb-2 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
            Add product
          </button>
          <button onClick={clearform} type="submit" className=" bg-blue-500 mb-2 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
