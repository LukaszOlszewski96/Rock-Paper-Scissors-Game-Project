import React from 'react';
import "./Login.css";
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {FcGoogle} from 'react-icons/fc';
import {SiFacebook} from 'react-icons/si';
import { signInWithGoogle } from './googleAuth';
import firebase from './googleAuth';

function Login() {

    const signInWithGoogle = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;

          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    return (
        <div className="main-conteiner-login">
            <div className="Login-conteiner">
                <h2>Zaloguj się na swoje konto<br/>szkoleniowe:</h2>
                    <form className="input-form-email">
                        <div className="icon-email"><HiOutlineMail/></div>
                        <input className="input-text-email" type="text" placeholder="E-mail"input/>
                    </form>
                    <form className="input-form-password">
                        <div className="icon-password"><RiLockPasswordLine/></div>
                        <input className="input-text-password" type="text" placeholder="Hasło"input/>
                    </form>
                    <a className="remaind-password" href="/">Nie pamiętasz hasła?</a>
                    <button className="Button-Login">
                    Zaloguj się
                    </button>
                    <div className="auth-box">
                        <a className="facebook-auth"><SiFacebook/></a>
                        <a className="gmail-auth" onClick={signInWithGoogle}><FcGoogle/></a>
                    </div>
                    <p className="text">Nie posiadasz konta? <a href="/">Zarejestruj się</a></p>
            </div>
        </div>
    )
}
export default Login;
 

