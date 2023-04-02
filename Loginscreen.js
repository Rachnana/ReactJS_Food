
import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { loginUser } from '../actions/userActions';
import Loading from '../components/Loading';
import Error from '../components/Error';

export default function Loginscreen() {

  
  const [email,setemail] = useState("");
  const [password,setpassword] = useState("");
  const loginState = useSelector(state=>state.loginUserReducer)
  const {loading, error} = loginState
  

  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('currentUser')){
      window.location.href='/'
    }
  },[])

  function login() {
    const user = {email,password}
    dispatch(loginUser(user))
  }


  return (

    <div>
      <div className='row justify-content-center mt-5'>
        <div className='col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded'>
            <h2 className="text-center m-2" style={{fontSize:'40px'}}>Login</h2>
            {loading && (<Loading/>)}
            {error && (<Error error='Invalid Credentials'/>)}
            <div>
                
                <input type="text" placeholder='email' className='form-control' value={email} required onChange={(e)=>{setemail(e.target.value)}}/>
                <input type="text" placeholder='password' className='form-control' value={password} required onChange={(e)=>{setpassword(e.target.value)}}/>
                
                <button onClick={login} className='btn mt-3 mb-3'>LOGIN</button>
                <br/>
                <a style={{color:'black'}} href='/register' className='m-2'>Click here to Register</a>
            </div>

        </div>
      </div>
    </div>
  )
}
