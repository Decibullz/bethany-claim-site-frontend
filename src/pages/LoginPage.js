import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../services/userService";


export default function LoginPage(props){

    const [formState , setFormState ]= useState({
        email:"",
        password:""
    })

    function handleChange(evt) {
        setFormState((prevState)=>({
          ...prevState,
          [evt.target.name]:evt.target.value
        }))
      }

      async function handleSubmit(evt) {
        evt.preventDefault();
        try {
          await login(formState)
          props.handleSignupOrLogin()
    
        } catch (err) {
            console.log(err);
            alert(err.message);
        }
      }

    function formValid(){
        return !!(formState.email && formState.password)
    }


    return(
        <main className="Page">
            <div className="transbox">
            <h1>
            Login
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input value={formState.email} name="email" placeholder='Email' className = "form-control" onChange={handleChange} type="email"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-12">
                        <input value={formState.password} name = "password" placeholder='Password' className = "form-control" onChange={handleChange} type="password"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className = "col-sm-12">
                        <input disabled= {!formValid()} value = 'Login' className = "form-control" type="submit"/>
                        <Link to= '/' >Cancel</Link>
                    </div>
                </div>
            </form>
                </div>
            </main>
    )
}