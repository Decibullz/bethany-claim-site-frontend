import{ signup } from '../services/userService'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SignupPage(props){

    const [ formState, setFormState ] = useState({
        name:'',
        email:'',
        password:''
    })
function formValid(){
    return !!(formState.name && formState.email && formState.password)
}

    function handleChange(evt){
        setFormState(prevState => ({
            ...prevState,
            [evt.target.name]:evt.target.value
        }))

    }

    async function handleSubmit(event) {
        event.preventDefault();
        if(!formValid()) return;
        try {
            await signup(formState);
            props.handleSignupOrLogin()
        } catch (error) {
            alert(error.message);
        }
    }


    return(
        <main className="Page">
            <div className="transbox">

            <h1>
            Signup
            </h1>
            <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="col-sm-12">
              <input name="name" type="text" className="form-control" placeholder="Name" value={formState.name} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input name="email" type="email" className="form-control" placeholder="Email" value={formState.email} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12">
              <input name="password" type="password" className="form-control" placeholder="Password" value={formState.password} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <input disabled={!formValid()} type="submit" className="btn btn-default" value="Sign Up" />
              &nbsp;&nbsp;
              &nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
              <br/>
              <p></p>
              <p>Already a User?</p><p><Link to='/login'>Sign-In</Link> </p>
            </div>
          </div>
        </form>
          </div>
            </main>
    )
}