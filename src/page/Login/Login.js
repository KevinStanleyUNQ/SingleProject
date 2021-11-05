import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../../context/userContext";
import { useShowText } from "../../utils/useShowText";
import axios from "axios";
import "../Login/Login.css";
import { LoadUserContext } from "../../utils/global-functions";

const Login = () => {
  const [userLog, setUserLog] = useState({
    email: "",
    password: "",
  });

  const [setModal, isOpen, modalText] = useShowText();

  const history = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history("/");
    }
  }, []);


  const emailRegex =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    const passRegex = /^[a-zA-Z0-9_]*$/;

  const handleUser = (e) => {
    setUserLog({ ...userLog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = userLog.email;
    const password = userLog.password;

    const isEmailValid = emailRegex.test(email) && email.trim() !== "";
    const isPasswordValid = passRegex.test(password) && password.trim() !== ""; 

    if (!isEmailValid) {
      const text = "Ingrese un email valido";
      setModal(text);
    } 
    else if(!isPasswordValid){
      const text = "Ingrese una contraseña valida";
      setModal(text);
    }
    else {
      handleSignIn();
    }
  };

  const handleSignIn = async () => {
    try {
      const r = await axios.post("http://localhost:7000/login", {
        email: userLog.email,
        password: userLog.password,
      });
      localStorage.setItem("token", r.headers.authentication);
      LoadUserContext(r);
      history("/");
    } catch (error) {
      const value = "Usuario no encontrado.";     
      setModal(value)
    }
  }


  const handleRegister = () => {
      history("/register");
  }
  
  

  return (
    <>
      <div className="login-tittle">
        <h1>Bienvenidos a Spotify</h1>
      </div>
      <div className="container container-login">
        <div className="container-fluid h-100 bg-black text-dark">
          <div className="row justify-content-center align-items-center">
            <h1>Inciar Sesión</h1>
          </div>
          <form className="login-form">
            <div className="mb-3">
              <label className="form-label">Dirección de Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Escriba una direccion de correo..."
                required
                name="email"
                value={userLog.email}
                onChange={handleUser}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                Un formato valido unEjemplo@ejemplo.com
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input
                type="password"
                className="form-control"
                placeholder="Escriba una contraseña..."
                required
                name="password"
                value={userLog.password}
                onChange={handleUser}
                id="exampleInputPassword1"
              />
            </div>
            {isOpen && (
              <div className="login_modal">
                <p className="login_modal-text">{modalText}</p>
              </div>
            )}
            <button 
                type="submit" 
                className="btn btn-primary"
                onClick={handleSubmit}>
              Iniciar Sesión
            </button>
            <div className="col-xs-12">
              <div className="divider" />
          </div>
          <div className="span-register">
            <span>¿No tienes aún una Cuenta?</span>
          </div>
          <button 
                type="submit" 
                className="btn btn-primary"
                onClick={handleRegister}
                >
              Registarse
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
