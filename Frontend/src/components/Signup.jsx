import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"

import axios from "axios"
const Signup = () => {
  const navigate=useNavigate();
  const location=useLocation();
const from=location.state?.from?.pathname || "/"


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) =>{
      const userInfo={
        fullname:data.fullname,
        email:data.email,
        password:data.password,
      }
     await axios.post("/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          alert("Signup Successfully");
         navigate(from,{replace:true});
        }
       // comments added
        localStorage.setItem("Users",JSON.stringify(res.data.user));
      }).catch((err)=>{
        if(err.reponse){
        console.log(err)
        alert("Error:"+err.reponse.data.message);
        }
      });
  };
  return (
    <>
    <div className="flex h-screen items-center justify-center">
    <div id="my_modal_3" className=" w-[600px]">
  <div className="modal_box">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:bg-slate-900 dark:text-white">✕</Link>
   
    <h3 className="font-bold text-lg dark:bg-slate-900 dark:text-white">Signup</h3>
    
    <div className="mt-4 space-y-2">
    
    <span>Name</span>
    <br/>
    <input type="text" placeholder="Enter your full name" className="w-80 px-3 border rounded-md outline-none" {...register("fullname", { required: true })}/>
    <br/>
    {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
   </div>
   <div className="mt-4 space-y-2">
    <span>Email</span>
    <br/>
    <input type="email" placeholder="Enter your email" className="w-80 px-3 border rounded-md outline-none" {...register("email", { required: true })}/>
    <br/>
    {errors.email && <span className="text-sm text-red-500">This field is required</span>}
   </div>
   <div className="mt-4 space-y-2">
    <span>Password</span>
    <br/>
    <input type="password" placeholder="Enter your password" className="w-80 px-3 border rounded-md outline-none" {...register("password", { required: true })}/>
    <br/>
    {errors.password && <span className="text-sm text-red-500">This field is required</span>}
   </div>
   <div className="flex justify-around mt-4">
    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">Signup</button>
    <p>Already registered? <Link to="/" className="underline text-blue-500 cursor-pointer">Login</Link>{" "}</p>
   </div>
   </form>
  </div>
</div>    
      
  </div></>
    
  )
}

export default Signup