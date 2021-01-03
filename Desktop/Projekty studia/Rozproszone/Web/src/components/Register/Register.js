import React from 'react';
import "./Register.css";
import {HiOutlineMail} from 'react-icons/hi'
import {RiLockPasswordLine} from 'react-icons/ri'
import {BsPerson} from 'react-icons/bs'
import {ImCheckboxChecked} from 'react-icons/im'
import {ImCheckboxUnchecked} from 'react-icons/im'
 
 
function Register() {
 
    
 
    return (
        <div className="main-conteiner-register">
            <div className="Register-conteiner">
                <h2>Dane uczestnika e-szkoleń:</h2>
                    <form className="input-form-imie">
                        <div className="icon-imie"><BsPerson/></div>
                        <input className="input-text-imie" type="text" placeholder="Imię"input/>
                    </form>
                    <form className="input-form-nazwisko">
                        <div className="icon-nazwisko"><BsPerson/></div>
                        <input className="input-text-nazwisko" type="text" placeholder="Nazwisko"input/>
                    </form>
                    <form className="input-form-email">
                        <div className="icon-password"><HiOutlineMail/></div>
                        <input className="input-text-email" type="text" placeholder="E-mail"input/>
                    </form>
                    <form className="input-form-password">
                        <div className="icon-password"><RiLockPasswordLine/></div>
                        <input className="input-text-password" type="text" placeholder="Hasło"input/>
                    </form>
                    <a className="subscription" href="/"><ImCheckboxUnchecked/> Chcę otrzymywać wiadomości e-mail z ofertami.</a>
                    <button className="Button-Register">
                    Zarejestruj się
                    </button>
                    <p className="text-register">Rejestracja oznacza akceptację<a href="/">Warunków użytkowania</a><b/> i <a href="/">Polityki</a> w zakresie<a href="/"> Ochrony prywatności</a>. </p>
            </div>
        </div>
    )
}
export default Register;
 
 

