import React, { useState,useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios'
const Course = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
        const res=await axios.get("/book");
        console.log(res.data + "data")
        setBook(res.data)
      }
      catch(error){
        console.log(error)
      }
    };
    getBook();
  },[]);
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="mt-24 items-center justify-center text-center ">
        <h1 className="text-2xl md:text-4xl">
          We're delighted to have you{" "} 
          <span className="text-pink-500">Here!:)</span>
        </h1>
        <p className="mt-12">
        We offer book at very low cost,free as well and life time accesibility enjoy learning with our course books.
        </p>
       <Link to={'/'}>
       <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
       </Link>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
          book.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
  )
}

export default Course;