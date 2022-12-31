
import React, { useState, useEffect } from 'react'
import logo from '../../Assets/headerimg.png'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import Footer from "../../components/footer/footer"
import "./login.scss"


const Login = () => {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        if (localStorage.getItem('user-info')) {

        }
    }, [])
    const loginUser = async (e) => {
        console.warn(email, password)
        e.preventDefault();
        const res = await fetch('/Login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })

        })
        const data = await res.json();
        localStorage.setItem('user-info', JSON.stringify(data));
        if (res.status === 400 || !data) {
            window.alert('invalid Credentials')
            history("/")

        } else {
            window.alert("login Successful");
            history("/")
        }
    }

    return (
        <div className='m-90 mainlogin'><div className="text-center m-90 d-flex main ">

            <div className="form-signin w-50 h-100">
                <form method='POST'>
                    <img className="mb-4" src={logo} alt="" width="122" height="97" />
                    <h1 className="h3 mb-3 fw-normal text-black">Please sign in[Only for admins]</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>


                    <button className="w-100 btn btn-lg btn-primary" onClick={loginUser} type="submit">Sign in</button>

                    <Link to="/" style={{ textDecoration: "none" }} >
                        <button type="button" href="/" class="btn btn-primary" style={{ width: 100, height: 70, margin: 20 }}>Back </button>
                    </Link>
                    <p className="mt-5 mb-3 text-muted">© 2022–2023</p>
                </form>
            </div>
        </div>
            <div className="footer"><Footer  /></div>
            </div>



    )
}

export default Login



