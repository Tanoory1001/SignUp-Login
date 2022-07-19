import React,{useState,useEffect} from "react";
import Stile from "./SignupForm.module.css";
import {validateSignup} from "./validateSignup";
import { ToastContainer } from 'react-toastify';
import {notify} from "./Toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const SignupForm =()=>{
    const [data,setData]=useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",
        checkboks:false,
    })

    const[errors,setErrors]=useState({})

    const[touch,setTouch]=useState({})

    useEffect(()=>{
        setErrors(validateSignup(data,"SignUp"))
    },[data])

    const focusHandler=(event)=>{
        setTouch({...touch , [event.target.name]:true })
    }

    const submitHandler=event=>{
        event.preventDefault();
        if(!Object.keys(errors).length){
            notify("ثبت نام موفقیت امیز بود ","success")
            console.log(data)
        } else{
            notify("لطفا اطلاعات خواسته رو درست پر کنید.","error")
            setTouch({
                username:true,email:true,password:true,confirmpassword:true
            })
        }}
    
    const changeHandler=(event)=>{
        if(event.target.name==='checkboks'){
            setData({...data,[event.target.name]:event.target.checked})
        }else{
            setData({...data,[event.target.name]:event.target.value})
        }
        // console.log(event)
    }
    
    return(
        <div className={Stile.container}>
        <form onSubmit={submitHandler} className={Stile.formcontainer}>
            <h1 className={Stile.header}>Signup</h1>
            <div className={Stile.formfield}>
                <label>Username</label>
                <input 
                className={(errors.username&&touch.username)? Stile.uncompelete:Stile.forminput}
                type="text" name="username" value={data.username} onChange={changeHandler} placeholder="UserName" onFocus={focusHandler}/>
                {errors.username&&touch.username&&<span>{errors.username}</span>}
            </div>
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
            <div className={Stile.formfield}>
                <label>Confirm-Password</label>
                <input 
                className={(errors.confirmpassword&&touch.confirmpassword)? Stile.uncompelete:Stile.forminput}
                type="password" name="confirmpassword" value={data.confirmpassword} onChange={changeHandler} placeholder="password" onFocus={focusHandler}/>
                {errors.confirmpassword&&touch.confirmpassword&&<span>{errors.confirmpassword}</span>}

            </div>
            <div className={Stile.formfield}>
                <div className={Stile.checkbokscontainer}>
                    <label>I Accept the Terms</label>
                    <input 
                    className={(errors.checkboks&&touch.checkboks)? Stile.uncompelete:Stile.forminput}
                    type="checkbox" name="checkboks" value={data.checkboks} onChange={changeHandler} onFocus={focusHandler}/>
                </div>
                    {errors.checkboks&&touch.checkboks&&<span>{errors.checkboks}</span>}

            </div>
            <div className={Stile.formbuttons}>
                <Link to='/login' onClick={changeHandler}>Login</Link>
                <button type="submit" >Signup</button>
            </div>
        </form>
        <ToastContainer />
        </div>)
        };

export default SignupForm;
