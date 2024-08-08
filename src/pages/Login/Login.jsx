import React, { useRef, useState } from "react";
import styles from "../Login/index.module.css";
import imag1 from "../Register/img1.png";
import imag2 from "../Register/img2.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errors, setErrors] = useState([]);

  function validate() {
    const errors = [];
    if (!emailRef.current.value) {
      errors.push("Email shart va majburiy");
    }
    if (!passwordRef.current.value) {
      errors.push("Password shart va majburiy");
    }
    return errors;
  }

  function handleClick(event) {
    event.preventDefault();
    const validationErrors = validate();

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };


    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    storedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    console.log("User data saved:", user);
    navigate("/"); 
  }

  function handleRegister(event) {
    event.preventDefault();
    navigate("/register");
  }

  return (
    <div className={styles.div}>
      <div className="img">
        <img src={imag1} alt="" />
      </div>
      <div className={styles.forms}>
        <div className={styles.title}>
          <img src={imag2} alt="" />
        </div>
        <h1>Nice to see you again</h1>
        <form>
          <div className={styles.email}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email or phone number"
              ref={emailRef}
            />
          </div>
          <div className={styles.password}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              ref={passwordRef}
            />
          </div>
          {errors.length > 0 && (
            <div className={styles.errors}>
              {errors.map((error, index) => (
                <p key={index} style={{ color: "red" }}>{error}</p>
              ))}
            </div>
          )}
          <div className={styles.remember}>
            <p>Remember me</p>
            <span>Forgot password?</span>
          </div>
          <button onClick={handleClick}>Sign in</button>
          <div className={styles.div1}></div>
          <button className={styles.btn2}>Or sign in with Google</button>
          <div className={styles.acc}>
            <p>Don't have an account</p>
            <span onClick={handleRegister}>Sign up now</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
