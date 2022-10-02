import classes from './Login.module.css';
import {useRef} from "react";
import Input from "./UI/Input";
import Header from "./Layout/Header/Header";
import HeaderImage from "./Layout/HeaderImage";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

const Login = () => {
    const emailRef = useRef("")
    const pwdRef = useRef("")
    const auth = useAuth();
    let navigate = useNavigate();


    const handleLogin = (user, pwd) => {
        // const path = "";
        // fetch(path).then(response => {
        //     console.log(response)
            auth.login("token")
            navigate("/collections")
        // })
    }

    const handleSubmit = (event) => {
        console.log(emailRef.current.value)
        console.log(pwdRef.current.value)
        handleLogin(emailRef.current.value, pwdRef.current.value)
    }

  return (
      <>
          <HeaderImage/>
          <section className={classes.summary}>
              <h2>Log in</h2>
              <div>
                  <form onSubmit={(e) => e.preventDefault()}>
                      <div className="row mb-3">
                          <Input ref={emailRef}
                                 name={"email"}
                                 type="text"
                                 label={"Email"}
                          />
                      </div>
                      <div className="row mb-3">
                          <Input ref={pwdRef}
                                 name={"pwd"}
                                 type="password"
                                 label={"Password"}
                          />
                      </div>
                      <div className="d-grid gap-2" >
                          <button className="btn btn-secondary"
                                  type="button"
                                  onClick={handleSubmit}>
                              Button
                          </button>
                      </div>
                  </form>
              </div>
          </section>
      </>

  );
};

export default Login;
