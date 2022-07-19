import React,{useState,useEffect} from "react";
import Stile from "./SignupForm.module.css";
import {validateSignup} from "./validateSignup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from "./Toastify";
import { Link } from "react-router-dom";


const SignupForm =()=>{
    const [data,setData]=useState({        
        email:"",
        password:"",
    })
       
    const[errors,setErrors]=useState({})

    const[touch,setTouch]=useState({})

    useEffect(()=>{
        setErrors(validateSignup(data,"Login"))
    },[data,touch])

    const focusHandler=(event)=>{
        setTouch({...touch , [event.target.name]:true })
    }

    const submitHandler=event=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("ورود کاربر موفقیت امیز بود ","success")
            console.log(data)
        } else{
            notify("لطفا اطلاعات خواسته رو درست پر کنید.","error")
            setTouch({
                email:true,password:true,
            })
        }}
    
    const changeHandler=(event)=>{
         setData({...data,[event.target.name]:event.target.value})
        }
    
    return(
        <div className={Stile.container}>
        <form onSubmit={submitHandler} className={Stile.formcontainer}>
            <h1 className={Stile.header}>Login</h1>
            <div className={Stile.formfield}>
                <label>E-mail</label>
                <input
                className={(errors.email&&touch.email)? Stile.uncompelete:Stile.forminput}
                type="email" name="email" value={data.email} onChange={changeHandler} placeholder="E-mail" onFocus={focusHandler}/>
                {errors.email&&touch.email&&<span>{errors.email}</span>}

            </div>
            <div className={Stile.formfield}>
                <label>Password</label>
                <input 
                className={(errors.password&&touch.password)? Stile.uncompelete:Stile.forminput}
                type="password" name="password" value={data.password} onChange={changeHandler} placeholder="Password" onFocus={focusHandler}/>
                {errors.password&&touch.password&&<span>{errors.password}</span>}

            </div>           
            <div className={Stile.formbuttons}>
                <Link to='/signup' onClick={changeHandler}>SignUp</Link>
             <button type="submit" >Login</button>
            </div>
        </form>
        <ToastContainer />
        </div>)
        };

export default SignupForm;
