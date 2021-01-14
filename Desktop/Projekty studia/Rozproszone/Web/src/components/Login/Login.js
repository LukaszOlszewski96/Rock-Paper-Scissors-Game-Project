import React, { useContext, useEffect, useState } from 'react';
import {withRouter, Redirect} from "react-router";
import "./Login.css";
import {HiOutlineMail} from 'react-icons/hi';
import {RiLockPasswordLine} from 'react-icons/ri';
import {FcGoogle} from 'react-icons/fc';
import {SiFacebook} from 'react-icons/si';
import { auth, db, signInWithGoogle } from './googleAuth';
import firebase from './googleAuth';
import { AuthContext } from './Auth';
import firebaseApp from './googleAuth';
import {provider} from '../Login/googleAuth';


function Login() {

    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Logowanie Email/pass
    const loginEmailAndPass = () =>{
        
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("User has been submitted")
        })
        .catch((error) => {
            alert(error.message);
        });

        setPassword("")
        setEmail("")
    };

    //Logowanie facebook
    const signInFacebook = () =>{
        auth().signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;
        
            // The signed-in user info.
            var user = result.user;
            //Dodanie bazy do auth Facebook i pobranie emaila
            db.collection('user').doc(user.uid).set({
                email: user.email,
                imie: user.displayName
            }).then(() => {
                alert("User has been submitted")
            })
            .catch((error) => {
                alert(error.message);
            });
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var accessToken = credential.accessToken;
        
            // ...
          })
          .catch((error) => {
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

    const signInWithGoogle = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.setCustomParameters({ prompt: 'select_account' });
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            //Dodanie bazy do auth Facebook i pobranie emaila
            db.collection('user').doc(user.uid).set({
                email: user.email,
                imie: user.displayName
            }).then(() => {
                alert("User has been submitted")
            })
            .catch((error) => {
                alert(error.message);
            });
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

    //Przełączenie na prywatne konto:
    const {currentUser} = useContext(AuthContext);

    if (currentUser){
        return <Redirect to="/edukacja" />
    }
    //
    return (
        <div className="main-conteiner-login">
            <div className="Login-conteiner">
                <h2>Zaloguj się na swoje konto<br/>szkoleniowe:</h2>
                    <form className="input-form-email">
                        <div className="icon-email"><HiOutlineMail/></div>
                        <input onChange = {(e) => setEmail(e.target.value)} value={email}  className="input-text-email" type="text" placeholder="E-mail"input/>
                    </form>
                    <form className="input-form-password">
                        <div className="icon-password"><RiLockPasswordLine/></div>
                        <input onChange = {(e) => setPassword(e.target.value)} value={password} name="userPassword" className="input-text-password" type="password" placeholder="Hasło"input/>
                    </form>
                    <a className="remaind-password" href="/">Nie pamiętasz hasła?</a>
                    <button onClick={loginEmailAndPass} className="Button-Login">
                    Zaloguj się
                    </button>
                    <div className="auth-box">
                        <a className="facebook-auth" onClick={signInFacebook}><SiFacebook/></a>
                        <a className="gmail-auth" onClick={signInWithGoogle}><FcGoogle/></a>
                    </div>
                    <p className="text">Nie posiadasz konta? <a href="/register">Zarejestruj się</a></p>
            </div>
        </div>
    )
}
export default Login;

