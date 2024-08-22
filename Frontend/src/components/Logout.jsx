import React from 'react'
import { useAuth } from '../context/AuthProvider'

export default function Logout() {

    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>{
        try{
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users")
            alert("Logout successfull");
           
            setTimeout(()=>{ 
                window.location.reload();  
            },1000);
           
        }
        catch(error){
            alert("Error");
            setTimeout(()=>{},3000);
        }
    }
  return (
    <div>
        <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer" onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}
