import { useHistory } from 'react-router-dom';
import "./Login.css";

function Login() {
    const history = useHistory();
    function clcLoginButton (){
        history.push('/login');
   }
    return (
        <div>
            <button type="button" className="login-button" onClick={clcLoginButton}>Zaloguj się</button>
        </div>
    )
}

export default Login;
