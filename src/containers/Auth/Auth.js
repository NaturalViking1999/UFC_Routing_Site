import React, { useState } from "react";
import './Auth.css';

const Auth = () => {

    const [someText, setSomeText] = useState('');
    let inpLog = React.createRef();
    let inpPass = React.createRef();

    const loginHandler = () => {
        if (inpLog.current.value.length >= 8 && inpPass.current.value.length >= 6) {
            window.location.href = 'http://localhost:3000';
            alert('Hello ' + inpLog.current.value)
        }
        else if (inpLog.current.value.length < 8 && inpPass.current.value.length >= 6) {
            setSomeText('Login length must be longer than 7 symbols!');
        }
        else if (inpPass.current.value.length < 6 && inpLog.current.value.length >= 8) {
            setSomeText('Password length must be longer than 5 symbols!');
        }
        else {
            setSomeText('Login length must be longer than 7 symbols and password length must be longer than 5 symbols!');
        }
    }

    const registerHandler = () => {

    }

    const submitHandler = (event) => {
        event.preventDefault();
    }

    const onChangeHandler = (event) => {

    }

    return (
        <div className="auth">
            <div>
                <h1>Authorisation</h1>
                <form className="form" onSubmit={submitHandler}>
                    <label htmlFor="">Login</label>
                    <input type="text" placeholder="Login" onChange={onChangeHandler} ref={inpLog} />
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Password" ref={inpPass} />
                    <p id="invalid">{someText}</p>
                    <button id="logIn" onClick={loginHandler}>Login</button>
                    <p id="auth-text">Haven't account on site? Then register new account.</p>
                    <button id="regIn" onClick={registerHandler}>Register</button>
                </form>
            </div>
        </div >
    )

}

export default Auth;