import { useHistory } from 'react-router-dom';
import "./Logout.css";
import app from './googleAuth';
function Logout() {

    const logoutAuthGoogle = () =>{
        app.auth().signOut()
    }

    return (
        <div>
            <button type="button" className="logout-button" onClick={logoutAuthGoogle}>Wyloguj się</button>
        </div>
    )
}

export default Logout;