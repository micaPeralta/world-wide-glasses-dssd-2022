import {useRef, useState} from "react";
import Input from "./UI/Input";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {API_AUTH} from "../helpers/Routes";


const Login = () => {
    const emailRef = useRef("")
    const pwdRef = useRef("")
    const auth = useAuth();
    let navigate = useNavigate();
    const [wrongCredentials, setWrongCredentials] = useState(false)


    if (auth?.user) {
        navigate("/home/collections")
    }

    const handleLogin = (user, pwd) => {
        let loginData = { email: user, password: pwd}
        const path = API_AUTH + "/login";
        fetch(path,{
            method: 'POST',
            body: JSON.stringify(loginData),
            credentials: 'include',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json'}
        }).then(response => {
                if (response.status === 401) {
                    setWrongCredentials(true)
                    return
                }
                return response.clone().json()
            })
            .then(data => {
                console.log(data);
                 auth.login(data)
                 navigate("home/collections")
            }).catch(response => console.log(response))
    }

    const handleSubmit = (event) => {
        console.log(emailRef.current.value)
        console.log(pwdRef.current.value)
        handleLogin(emailRef.current.value, pwdRef.current.value)
    }

    return (
        <>
        <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">

                                <div className="row" style={{minHeight: 500}}>
                                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    <div className="col-lg-6">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-4">Welcome!</h1>
                                            </div>
                                            {wrongCredentials && <div className="alert alert-danger" role="alert">
                                                Wrong credentials
                                            </div>}
                                            <form className="user">
                                                <div className="form-group">
                                                    <Input ref={emailRef}
                                                           name={"email"}
                                                           type="text"
                                                           label={"Email"}
                                                           id="exampleInputEmail"
                                                           placeholder="Enter Email Address..."
                                                           class={"form-control form-control-user"}
                                                    />
                                                </div>
                                                <div className="form-group">

                                                    <Input ref={pwdRef}
                                                           name={"pwd"}
                                                           type="password"
                                                           class="form-control form-control-user"
                                                           id="exampleInputPassword"
                                                           placeholder="Password"
                                                           label={"Password"}/>
                                                </div>

                                                <button className="btn btn-info btn-user btn-block"
                                                        type="button"
                                                        onClick={handleSubmit}>
                                                    Login
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;
