import axios from 'axios';
import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const toggle=()=>{
        setstate(!state);
    }
    const[isauth,setisauth]=useState(false);
    const [state, setstate] = useState(false)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [secretkey, setsecretkey] = useState("")

    const submithandler1=async(e,req,res)=>{
        e.preventDefault();
        try {
            const ans=await axios.post("http://localhost:3000/studentregister",{name,email,password},{
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              });
              if(ans.data.success){

                  toast.success(ans.data.message);
                  setname("")
                  setemail("")
                  setpassword("")
                  console.log(ans.data.message);
                  setisauth(true);
              }
              else{
                    toast.error(ans.data.message);
                    setpassword("")
                    setemail("")
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
            const ans=await axios.post("http://localhost:3000/teacherregister",{name,email,password,secretkey},{
                headers: {
                  "Content-Type": "application/json",
                },
                withCredentials: true,
              });
              if(ans.data.success){
                toast.success(ans.data.message);
                setname("")
                setemail("")
                setsecretkey("")
                setpassword("")
                console.log(ans.data.message);
                setisauth(true);
            }
            else{
                  toast.error(ans.data.message);
                  setpassword("")
                  setemail("")
                  setsecretkey("")
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
    if (!state) {
        return (
            <>
            <div className="choice">
            <button onClick={toggle}>register as teacher</button>
            </div>
            <form  className='form'  onSubmit={submithandler1}>
                <input type="text"required name="name" placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
                <input type="email" required name="email" placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                <input type="password" required name="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                <button className='btn'>register</button>
                </form>
            </>
        )
    }
    return (
        <>
            <div className="choice">
                <button onClick={toggle}>register as student</button>
            </div>
            <form  className='form'  onSubmit={submithandler2}>
                <input type="text"required name="name" placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}} />
                <input type="email" required name="email" placeholder='email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
                <input type="password" required name="password" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                <input type="password" required name="secretkey" placeholder='secretkey' value={secretkey} onChange={(e)=>{setsecretkey(e.target.value)}} />
                <button className='btn'>register</button>
                </form>
        </>
    )
}

export default Register
