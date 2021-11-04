import React, { useState, useEffect } from 'react';
import { UserProvider } from "../../context/userContext";
import { useShowText } from "../../utils/useShowText";
import "../Register/Register.css";

const Register = () => {

    const [userReg, setUserReg] = useState({
        email: "",
        password: "",
        image:"",
        displayName:""
      });
    
    //   const [setModal, isOpen, modalText] = useShowText();
    
      useEffect(() => {
        // if (localStorage.getItem("token")) {
        //   history.push("/");
        // }
      }, []);
    
    
      const emailRegex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
        const passRegex = /^[a-zA-Z0-9_]*$/;
    
      const handleUser = (e) => {
        setUserReg({ ...userReg, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        const email = userReg.email;
        const password = userReg.password;
        const image = userReg.image;
        const displayName = userReg.displayName;
        

        const isValid = emailRegex.test(email) && passRegex.test(password);
    
        if (!isValid) {
          const text = "Ingrese un email valido";
        //   setModal(text);
        } else {
          handleRegister();
        }
      };
    
      const handleRegister = () => {
          console.log("Me registré");
      }


    return (
        <>
        <div className="container">
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
                  required
                  name="email"
                //   value={userReg.email}
                //   onChange={handleUser}
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
                //   value={userLog.password}
                //   onChange={handleUser}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Imagen</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escriba una contraseña..."
                  required
                  name="image"
                //   value={userLog.image}
                //   onChange={handleUser}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Nombre De Usuario</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escriba una contraseña..."
                  required
                  name="displayName"
                //   value={userLog.displayName}
                //   onChange={handleUser}
                />
              </div>
              {/* {isOpen && (
                <div className="login_modal">
                  <p className="login_modal-text">{modalText}</p>
                </div>
              )} */}
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
                  // onClick={handleRegister}
                  >
                Registarse
              </button>
            </form>
          </div>
        </div>
      </>
    )
}

export default Register
