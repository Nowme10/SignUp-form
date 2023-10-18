import React, { useEffect, useState } from 'react'

function DashBoard() {
    const [user, setuser] = useState([])
    const getUserData = async()=>{
       const data =  localStorage.getItem('dataUser')
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
      <th scope="col">ADDRESS</th>
      <th scope="col">ADDRESS2</th>
      <th scope="col">CITY</th>
      <th scope="col">ZIP</th>
      <th scope="col">ACTION</th>
      
    </tr>
  </thead>
  <tbody>
   
     {
        user?.map((item,index)=>{
            return (
                <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item?.firstname}{item?.lastname}</td>
                <td>{item?.address}</td>
                <td>{item?.address1}</td>
                <td>{item?.city}</td>
                <td>{item?.zip}</td>
                
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