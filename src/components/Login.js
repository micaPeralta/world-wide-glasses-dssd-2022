import {useRef, useState} from "react";
import Input from "./UI/Input";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import {AuthService} from "../services/LoginService";


const Login = () => {
    const emailRef = useRef("")
    const pwdRef = useRef("")
    const auth = useAuth();
    let navigate = useNavigate();
    const [error, setError] = useState(undefined)


    if (auth?.user) {
        navigate("/home/collections")
    }

    const handleLogin = (user, pwd) => {
        let loginData = {email: user, password: pwd}

        AuthService.login(loginData)
            .then(response => {
                if (response.status === 401) {
                    setError("Wrong credentials")
                    return
                }
                if (response.status === 500) {
                    setError("Unexpected error")
                    return
                }
                return response.clone().json()
            })
            .then(data => {
                auth.login(data)
                navigate("home/collections")
            }).catch(response => console.log(response))
    }

    const handleSubmit = () => {
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
                                            {error && <div className="alert alert-danger" role="alert">
                                                {error}
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
