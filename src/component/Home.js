import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown  from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { NavLink } from 'react-router-dom'





function Home() {
//     const [inputValue, setinputValue] = useState({
//             name: "",
//             email:"",
//             date: "",
//             password: "" 
//     })
//  const [data, setData] = useState([])
 
// const getdata = (e) =>{

// //   console.log(e.target.value)
// const {value, name} = e.target;
// // console.log(value,name)
// setinputValue(()=>{
//     return{
//         ...inputValue,
//         [name]: value,

//     }
// })

// }
// const addData = (e)=>{
//       e.preventDefault();
//     const {name, email,date,password} = inputValue;
//     if(name === ""){
//         alert("name field is requred")
//     }else if(email === ""){
//         alert("email field is requred")
//     }else if (date === ""){
//         alert("date field is requred")
//     }else if(password === ""){
//         alert("password field is requred")
//     }else if(password.length < 8){
//         alert("  Atlist 8 characters is requred")
//     }else{
//         localStorage.setItem("userData",JSON.stringify([...data,inputValue]))
//     }
const [inputValue, setInputValue] = useState({
  name: '',
  email: '',
  date: '',
  password: '',
  type:''
});

const getUserData = async()=>{
  const data = localStorage.getItem('userData');
  const parseData =await JSON.parse(data)
  if(parseData){
    setData(parseData)
  }
  
}

const [data, setData] = useState([])

console.log(data,'data')
const getdata = (e) => {
  const { value, name } = e.target;
  setInputValue((prevInputValue) => ({
    ...prevInputValue,
    [name]: value,
  }));
};

const addData = (e) => {
  e.preventDefault();
  const { name, email, date, password } = inputValue;

  if (name === '' || email === '' || date === '' || password === '') {
    alert('All fields are required');
  } else if (password.length < 8) {
    alert('Password should be at least 8 characters');
  } else {
    // Save the data to localStorage
    const newData = [...data, inputValue];
    localStorage.setItem('userData', JSON.stringify(newData));
    setData(newData);
  }
    
    }
    
useEffect(()=>{
  getUserData()
},[])
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