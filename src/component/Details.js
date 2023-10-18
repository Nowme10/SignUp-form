import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function Details() {
 
     
   const [inputValue, setInputValue] = useState({
        firstname:'',
        lastname: '',
        address:'',
        address1:'',
        city:'',      
        zip:''
       

   })
    const getUserData = async()=>{
    const data = localStorage.getItem('dataUser');
    const parseData =await JSON.parse(data)
    if(parseData){
      setData(parseData)
    }
    
  }
  
  const [data, setData] = useState([])
  
  // console.log(data,'data')
  const getdata = (e) => {
    const { value, name } = e.target;
    setInputValue((prevInputValue) => ({
      ...prevInputValue,
      [name]: value,
    }));
  };
  
  const addData = (e) => {
    e.preventDefault();
    const { firstname, lastname, address, address1, city, zip } = inputValue;
  
    if (firstname === '' || lastname === '' || address === '' || address1 === ''|| city ==='' || zip ==='') {
      alert(" All fields are required")
    
    }else {
      alert(" fields submit successfully")
      // Save the data to localStorage
      const newData = [...data, inputValue];
      localStorage.setItem('dataUser', JSON.stringify(newData));
      setData(newData);
     
    
     
    }
      
      }
      
  useEffect(()=>{
     getUserData()
  },[])
 
  


    
  return (
    <>
    <div className='d-flex justify-content-center w-100% '>
    
    <Form >
      <Form.Group className="mb-2  mt-3" controlId="formBasicUserName">
        <Form.Label className='text-primary'>First Name</Form.Label>
        <Form.Control onChange={getdata} name='firstname' type="text" placeholder="..." />               
       </Form.Group> 
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label className='text-primary' >Last Name</Form.Label>
        <Form.Control onChange={getdata} name='lastname' type="text" placeholder="..." />   
      </Form.Group> 
     
       

      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label className='text-primary'>Address</Form.Label>
        <Form.Control onChange={getdata} name='address' type="text" placeholder="..."  />      
      </Form.Group> 
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label className='text-primary'>Address 2</Form.Label>
        <Form.Control onChange={getdata} name='address1' type="text" placeholder="..."  />      
      </Form.Group> 
      <Form.Group className="mb-2 " controlId="formBasicEmail">
        <Form.Label className='text-primary'>city</Form.Label>
        <Form.Control onChange={getdata} name='city' type="text" placeholder="..." />      
      </Form.Group> 


      <Form.Group className="mb-2 " controlId="formBasicPassword">
        <Form.Label className='text-primary'>Zip</Form.Label>
        <Form.Control onChange={getdata} name='zip' type="number" placeholder="..." />
      </Form.Group> 

       
 
      
      <Button className='' variant="primary" type="submit" onClick={addData}>
        Submit
      </Button>
    </Form>
    </div>
    
    </>
  )
}
