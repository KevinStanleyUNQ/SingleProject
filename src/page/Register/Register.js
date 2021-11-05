import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { UserProvider } from "../../context/userContext";
import { useShowText } from "../../utils/useShowText";
import "../Register/Register.css";
import axios from 'axios';
import { LoadUserContext } from '../../utils/global-functions';

const Register = () => {

    const [userReg, setUserReg] = useState({
        email: "",
        password: "",
        image:"",
        displayName:""
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
    
      const handleUserRegister = (e) => {
        setUserReg({ ...userReg, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        
        e.preventDefault();
    
        const email = userReg.email;
        const password = userReg.password;
        const image = userReg.image;
        const displayName = userReg.displayName;
        

        const isEmailValid = emailRegex.test(email) && email.trim() !== ""
        const isPasswordValid = passRegex.test(password) && password.trim() !== "";
        const isDisplayNameValid = displayName.trim() !== "";
    
        
        if (!isEmailValid) {
          const text = "Ingrese un email valido";
          setModal(text);
        }
        else if(!isPasswordValid){
          const text = "Ingrese una contraseña valida";
          setModal(text);
        }
        else if(!isDisplayNameValid){
          const text = "Ingrese una Nombre de Usuario sin comenzar con espacios blancos";
          setModal(text);
        }
        else {
          handleRegister();
        }
      };
    
      const handleRegister = async () => {
        try {
          const r = await axios.post("http://localhost:7000/register", {
            email: userReg.email,
            password: userReg.password,
            image: userReg.image,
            displayName: userReg.displayName,
          });
    
          console.log("Usuario registrado correctamente, estado:" + r.status);
          signIn(r);
        } catch (error) {
          const text = "Ya existe un Usuario asociado a este email.";
          setModal(text);
        }
      }

      const handleLogin = () => {
        history("/login");
      }
      
      const signIn = async (user) => {
        try {
          const r = await axios.post("http://localhost:7000/login", {
            email: user.email,
            password: user.password,
          });
          localStorage.setItem("token", r.headers.authentication);
          LoadUserContext(r);
    
          history("/");
        } catch (error) {
          const value = "Usuario no encontrado.";     
          setModal(value)
        }
        
      }
      


    return (
        <>
        <div className="container container-register">
          <div className="container-fluid h-100 bg-black text-dark">
            <div className="row justify-content-center align-items-center">
              <h1>Regístrate</h1>
            </div>
            <form className="login-form">
              <div className="mb-3">
                <label className="form-label">Dirección de Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Escriba una direccion de correo..."
                  name="email"
                  required
                  value={userReg.email}
                  onChange={handleUserRegister}
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
                  placeholder="Escriba una constraseña.."
                  required
                  name="password"
                  value={userReg.password}
                  onChange={handleUserRegister}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Imagen</label>
                <input
                  type="url"
                  className="form-control"
                  placeholder="https://img.com..."
                  name="image"
                  value={userReg.image}
                  onChange={handleUserRegister}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre De Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="UnEjemplo123"
                  required
                  name="displayName"
                  value={userReg.displayName}
                  onChange={handleUserRegister}
                />
              </div>
              {isOpen && (
                <div className="register_modal">
                  <p className="register_modal-text">{modalText}</p>
                </div>
              )}
              <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={handleSubmit}>
                Registarse
              </button>
              <div className="col-xs-12">
                <div className="divider" />
            </div>
            <div className="span-register">
              <span>¿Ya tienes una Cuenta?</span>
            </div>
            <button 
                  type="submit" 
                  className="btn btn-primary"
                  onClick={handleLogin}
                  >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </>
    )
}

export default Register
