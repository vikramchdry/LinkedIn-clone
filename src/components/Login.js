import React, { useState } from 'react'
import '../styles/Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");



    const logintoApp = (e) => {

        e.preventDefault();
    };

    const register = () => {
        if (!name) {
            return alert("Please enter a full name");
        }
    };

    return (

        <div className="login">
            <img src="https://lh3.googleusercontent.com/proxy/B2cDqooHKWAupH5tT6IFlyvREyRxKv7I5cWboBmRZVVxxKX-ku7gAtFkuWYmOn92AaoTKb0O303SNDsT16G3z9iOIu35K9QX_VGH2i8URKW0w_cKtAT7l7WkOdEbnw"
                alt="" />
            <form>
                <input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Full name (required if registered)" />
                <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder="Profile pic URL (Optional)" type="text" />
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" />
                <button type="submit" onClick={logintoApp}>Sign In</button>
            </form>
            <p>
                Not a member?{""}
                <span className="login__register" onClick={register}>Register Now</span>
            </p>

        </div>
    );
}

export default Login;
