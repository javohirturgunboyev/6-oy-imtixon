import React, { useRef } from "react";
import styles from "../Register/index.module.css";
import imag1 from "../Register/img1.png";
import imag2 from "../Register/img2.png";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function validate() {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!name || !email || !password) {
      alert("All fields are required!");
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Invalid email format!");
      return false;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return false;
    }

    return true;
  }

  function handleClick(event) {
    event.preventDefault();
    const isValid = validate();

    if (!isValid) {
      return;
    }

    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    console.log(user);

    fetch("https://api.escuelajs.co/api/v1/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/login"); 
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
            <input type="email" placeholder="Email or phone number" ref={emailRef} />
          </div>
          <div className={styles.email}>
            <label>Name</label>
            <input type="text" placeholder="Enter name" ref={nameRef} />
          </div>
          <div className={styles.password}>
            <label>Password</label>
            <input type="password" placeholder="Enter password" ref={passwordRef} />
          </div>
          <div className={styles.password}>
            <label>Repeat Password</label>
            <input type="password" placeholder="Repeat password" />
          </div>
          <div className={styles.remember}>
            <p>Remember me</p>
            <span>Forgot password?</span>
          </div>
          <button onClick={handleClick}>Sign up</button>
          <div className={styles.div1}></div>
          <button className={styles.btn2}>Or sign in with Google</button>
          <div className={styles.acc}>
            <p>Don't have an account?</p>
            <span>Sign up now</span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
