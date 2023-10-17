
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'


export default function Login() {
  const history  = useNavigate(); 

    const [inputValue, setinputValue] = useState({
       
        email:"",
       
        password: "" 
})
const [data, setData] = useState([])
const getdata = (e) =>{

//   console.log(e.target.value)
const {value, name} = e.target;
// console.log(value,name)
setinputValue(()=>{
return{
    ...inputValue,
    [name]: value,

}
})

}
const addData = (e)=>{
  e.preventDefault();

  const getUserArr = localStorage.getItem("userData")
  const {email ,password} = inputValue;

 if(email === ""){
    alert("email field is requred")
}else if(password === ""){
    alert("password field is requred")
}else if(password.length < 8){
    alert("  Atlist 8 characters is requred")
}else{
    if(getUserArr && getUserArr.length){
        const userData = JSON.parse(getUserArr);
        const userlogin = userData.filter((el, k )=> {
        return el.email === email && el.password === password
        });
        if(userlogin.length === 0){
            alert("Invalid email")
        }else{
            alert("user login successfully")
            localStorage.setItem("user_login",JSON.stringify(userlogin))
            history('/details')
        }
    }
}   

}

  return (
    <>
      <div className="container "> 
        <section className='  d-flex justify-content-between'>
            <div className='left-data' style={{width: "100%"}}>
                <h3 className='text-center col-lg-6 fw-bold text-primary'>Sign In</h3>
                <Form>
      
      <Form.Group className="mb-2 col-lg-6" controlId="formBasicEmail">
        <Form.Label className='text-primary' >Email address</Form.Label>
        <Form.Control onChange={getdata} name='email' type="email" placeholder="Enter email" />                     
      </Form.Group> 
     

      <Form.Group className="mb-2 col-lg-6" controlId="formBasicPassword">
        <Form.Label className='text-primary'>Password</Form.Label>
        <Form.Control onChange={getdata} name='password' type="password" placeholder="Password" />
      </Form.Group>  
      
      <Button className='col-lg-6' variant="primary" type="submit" onClick={addData}>
        Submit
      </Button>

    </Form>
    <p className='mt-3'> Don't Have An Account?<span className='text-primary'>SignUp</span></p>
            </div>
            <div className='right-data mb-10'  style={{width:"100%"}}>
              <div className='signin-image mb-10 '>
                <img src='./Office-PNG-Photo.png' style={{maxWidth:"400px"}} />
              </div>
            </div>
        </section>
    </div>
              
    </>
  )
}



