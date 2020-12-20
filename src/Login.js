import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import{auth,provider} from './firebase.js';

function Login(props) {
    const signIn=()=>{
      auth.signInWithPopup(provider)
      .then((result)=>{
          console.log(result.user);
          props.setUser(result.user);
      }).catch((error)=>alert(error.message));
    };

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://rb.gy/fvmkug" alt=""/>
                <img className="login__logo2" alt="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1920px-Facebook_Logo_%282019%29.svg.png"/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
