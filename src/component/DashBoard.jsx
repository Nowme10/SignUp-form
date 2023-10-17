import React, { useEffect, useState } from 'react'

function DashBoard() {
    const [user, setuser] = useState([])
    const getUserData = async()=>{
       const data =  localStorage.getItem('userData')
       try {
        const parseData = JSON.parse(data)
        setuser(parseData)
       } catch (error) {
        console.log(error)
       }
    }
    console.log('user', user)
    useEffect(()=>{
getUserData()
    },[])
  return (
   <>
   <table class="table table-hover table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">NAME</th>
      <th scope="col">EMAIL</th>
      <th scope="col">USER TYPE</th>
      <th scope="col">ACTION</th>
      
    </tr>
  </thead>
  <tbody>
   
     {
        user?.map((item,index)=>{
            return (
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.type}</td>
                <td><button type="button" class="btn btn-outline-info">Edit</button></td>
                </tr>
            )
        })
     }
    
  
      

  </tbody>
</table>
   </>
  )
}

export default DashBoard