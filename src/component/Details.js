import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Details() {
    const Birthday = () =>{
        const getUser = localStorage.getItem("user_login");
        if(getUser && getUser.length){
            const user = JSON.parse(getUser);
        }
    }
    useEffect(()=>{
       Birthday();
    },[])
  return (
    <div></div>
  )
}
