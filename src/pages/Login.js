import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const Login = () => {
    const toggle=()=>{
        setstate(!state);
    }
    const[isauth,setisauth]=useState(false);
    const [state, setstate] = useState(false)
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const submithandler1=async(e,req,res)=>{
        e.preventDefault();
        try {
            const ans=await axios.post("http://localhost:3000/studentlogin",{email,password},{
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              });
              if(ans.data.success){

                  toast.success(ans.data.message);
                  setemail("")
                  setpassword("")
                  console.log(ans.data.message);
                  setisauth(true);
              }
              else{
                    toast.error(ans.data.message);
                    setpassword("")
                    // setemail("")
                    console.log(ans.data.message);
                  setisauth(false);
              }
            
        } catch (error) {
            toast.error(error.response.data.message)
            console.log(error)
            setisauth(false)
        }
        
    }
    const submithandler2=async(e,req,res)=>{
        e.preventDefault();
        try {
            const ans=await axios.post("http://localhost:3000/teacherlogin",{email,password},{
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              });
              if(ans.data.success){
                toast.success(ans.data.message);
                setemail("")
                setpassword("")
                console.log(ans.data.message);
                setisauth(true);
            }
            else{
                  toast.error(ans.data.message);
                  setpassword("")
                //   setemail("")
                  console.log(ans.data.message);
                setisauth(false);
            }
            
        } catch (error) {
            toast.error(error.response.data.message);
            console.log(error);
            setisauth(false)
        }
        
    }
    if(isauth){
        console.log(isauth);
        return (<Navigate to={"/home"}/>);
    }
    else{

        if (!state) {
            return (
                <>
                <div className="choice">
                <button onClick={toggle}>login as teacher</button>
                </div>
                <form  className='form'  onSubmit={submithandler1}>
                    <input type="email" required name="email" placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                    <input type="password" required name="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                    <button className='btn'>login</button>
                    </form>
                </>
            )
        }
        return (
            <>
                <div className="choice">
                    <button onClick={toggle}>login as student</button>
                </div>
                <form className='form' onSubmit={submithandler2}>
                    <input type="email" required name="email" placeholder='email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                    <input type="password" required name="password" placeholder='password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
                    <button className='btn'>login</button>
                </form>
            </>
        )
    }
}

export default Login
