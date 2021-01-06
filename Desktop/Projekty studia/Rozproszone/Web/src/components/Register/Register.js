import React, { useState } from 'react';
import "./Register.css";
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {BsPerson} from 'react-icons/bs'
import {ImCheckboxChecked} from 'react-icons/im'
import {ImCheckboxUnchecked} from 'react-icons/im'
import googleAuth, { generateUserDocument } from "../Login/googleAuth";
import { db } from "../Login/googleAuth";

function Register() {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSumbit = (e) => {
        e.preventDefault();

        db.collection('user').add({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).then(() => {
            alert("User has been submitted")
        })
        .catch((error) => {
            alert(error.message);
        });

        setLastName("")
        setFirstName("")
        setPassword("")
        setEmail("")
    };

    return (
        <div className="main-conteiner-register">
            <div className="Register-conteiner">
                <h2>Dane uczestnika e-szkoleń:</h2>
                    <form className="input-form-imie">
                        <div className="icon-imie"><BsPerson/></div>
                        <input onChange={(e) => setFirstName(e.target.value)} value={firstName}  className="input-text-imie" type="text" placeholder="Imię" name="userName" />
                    </form>
                    <form className="input-form-nazwisko">
                        <div className="icon-nazwisko"><BsPerson/></div>
                        <input onChange={(e) => setLastName(e.target.value)} value={lastName}  className="input-text-nazwisko" type="text" placeholder="Nazwisko" name="userSurname" />
                    </form>
                    <form className="input-form-email">
                        <div className="icon-password"><HiOutlineMail/></div>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} className="input-text-email" type="text" placeholder="E-mail" name="userEmail" />
                    </form>
                    <form className="input-form-password">
                        <div className="icon-password"><RiLockPasswordLine/></div>
                        <input onChange={(e) => setPassword(e.target.value)} value={password}  className="input-text-password" type="password" placeholder="Hasło" name="userPassword" />
                    </form>
                    <a className="subscription" href="/"><ImCheckboxUnchecked/> Chcę otrzymywać wiadomości e-mail z ofertami.</a>
                    <button onClick={handleSumbit} className="Button-Register" >
                    Zarejestruj się
                    </button>
                    <p className="text-register">Rejestracja oznacza akceptację<a href="/">Warunków użytkowania</a><b/> i <a href="/">Polityki</a> w zakresie<a href="/"> Ochrony prywatności</a>. </p>
            </div>
        </div>
    )
}

export default Register;

