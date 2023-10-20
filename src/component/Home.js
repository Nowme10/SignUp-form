import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown  from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'





function Home() {

const history  = useNavigate(); 
const dataFromLocalStorage = JSON.parse(localStorage.getItem('userData'))

const [inputValue, setInputValue] = useState({
  name: '',
  email: '',
  date: '',
  password: '',
  type:''
});
const [dataToUpdate, setDataToUpdate] = useState(dataFromLocalStorage)




const getdata = (e) => {
  const { name, value } = e.target;
  setInputValue((prevInputValue) => ({
    ...prevInputValue,
    [name]: value,
  }));
};


const addData = (e) => {
  e.preventDefault();
  const { name, email, date, password } = inputValue;
  const updatedArray = [...dataToUpdate, inputValue];
  
  if (name === '' || email === '' || date === '' || password === '') {
    alert('All fields are required');
  } else if (password.length < 8) {
    alert('Password should be at least 8 characters');
  } else {    
  
    // Save the data to localStorage
    
    localStorage.setItem('userData', JSON.stringify(updatedArray));
    //setData(newData);
    // history('/details')
    
      history('/details')
    
  }
  if(inputValue?.type === 'admin'){
    history('/dashboard')
  }else{
    history('/details')
  }
   
}

  return (
    <>
    
    <div className="container mt-4"> 
        <section className='  d-flex justify-content-between'>
            <div className='left-data' style={{width: "100%"}}>
                <h3 className='text-center col-lg-6 fw-bold text-primary'>Sign Up</h3>
               
                <Form>
      <Form.Group className="mb-2 col-lg-6 mt-3" controlId="formBasicUserName">
        <Form.Label className='text-primary'>User Name</Form.Label>
        <Form.Control onChange={getdata} name='name' type="text" placeholder="User Name" />                 
       
      </Form.Group> 
      <Form.Group className="mb-2 col-lg-6" controlId="formBasicEmail">
        <Form.Label className='text-primary' >Email address</Form.Label>
        <Form.Control onChange={getdata} name='email' type="email" placeholder="Enter email" />   
      </Form.Group> 
     
       

      <Form.Group className="mb-2 col-lg-6" controlId="formBasicEmail">
        <Form.Label className='text-primary'>Date of Birth</Form.Label>
        <Form.Control onChange={getdata} name='date' type="date"  />      
      </Form.Group> 


      <Form.Group className="mb-2 col-lg-6" controlId="formBasicPassword">
        <Form.Label className='text-primary'>Password</Form.Label>
        <Form.Control onChange={getdata} name='password' type="password" placeholder="Password" />
      </Form.Group> 

       <Form.Group className="mb-2 col-lg-6" controlId="formBasicEmail">

        <DropdownButton id="dropdown-basic-button" title={inputValue?.type? inputValue?.type:'select an user type'}  >
        <Dropdown.Item eventKey={"user"} href="#/action-1" disabled>select</Dropdown.Item>
      <Dropdown.Item eventKey={"user"} href="#/action-1" onClick={()=>setInputValue({...inputValue,type:'user'})}>User</Dropdown.Item>
      <Dropdown.Item eventKey={"admin"} href="#/action-2 "onClick={()=>setInputValue({...inputValue,type:'admin'})}>Admin</Dropdown.Item>      
      </DropdownButton>
      </Form.Group> 
 
      
      <Button className='col-lg-6' variant="primary" type="submit" onClick={addData}>
        Submit
      </Button>
    </Form>
    <p className='mt-3'> Already Have An Account?<span className='text-primary'><NavLink to={"/login"}>SignIn</NavLink></span></p>
            </div>
            <div className='right-data mb-10'  style={{width:"100%"}}>
              <div className='signin-image mb-10 '>
                <img src='./Office-PNG-Photo.png' style={{maxWidth:"600px"}} />
              </div>
            </div>
        </section>
    </div>
    </>
  )
}


export default Home