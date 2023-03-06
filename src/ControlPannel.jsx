import React from "react";
import { useState } from "react";
import {Link ,useNavigate} from 'react-router-dom'
export default function ControlPannel(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [ mob,setMob]=useState("")
    const [pass,setPass]=useState("")
    const [ lemail,setLemail]=useState("")
    const [ lpass,setLpass]=useState("")
   const   navigate=useNavigate()
    function register(e){
        e.preventDefault()
         const newObj={
            name:name,
            email:email,
            mob:mob,
            pass:pass
             }
      var data=JSON.parse(window.localStorage.getItem("register"))
      if(data==null)
      data=[newObj]
      else
       data.push(newObj)
 window.localStorage.setItem("register",JSON.stringify(data))
            setEmail("")
            setName('')
            setMob('')
            setPass('')
    }
     function login(e){
        e.preventDefault()

        var data=JSON.parse(window.localStorage.getItem("register"))
        data.forEach((data)=>{
         if(data.email==lemail && data.pass==lpass){
          
           window.localStorage.setItem("id",JSON.stringify(data.email))
           navigate('/task')
        }

        })
     }
    return(
       <div className="container">
            <div className="row">
                
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                <h1 className="text-center">Login Here!</h1>
                    <form onSubmit={login}>
                        <label>UserName</label><br/>
                        <input  type='email' onChange={(e)=>setLemail(e.target.value)} className="form-control"/>
                        <label>Password</label>:<br/>
                        <input  type='password' onChange={(e)=>setLpass(e.target.value)} className="form-control"/><br/>
                        <input type='submit' className="btn btn-info" value='Login' />
                    </form>
                </div>
                <div className="col-sm-4">
                <h1 className="text-center">Register Here!</h1>
                    <form onSubmit={register}>
                        <label>Name</label><br/>
                        <input  type='text' onChange={(e)=>setName(e.target.value)} className="form-control"/>
                        <label>Mobile</label><br/>
                        <input  type='number'  onChange={(e)=>setMob(e.target.value)}  className="form-control"/>
                        <label>email</label><br/>
                        <input  type='email'  onChange={(e)=>setEmail(e.target.value)}  className="form-control"/>
                        <label>Password</label><br/>
                        <input  type='password'  onChange={(e)=>setPass(e.target.value)}  className="form-control"/><br/>
                        <input type='submit' className="btn btn-info" value='register' />
                        
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
       </div>
    )
}