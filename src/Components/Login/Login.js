import React, { useState, useContext } from 'react'
import './Login.css'
import { DataContext } from '../../context/DataProvider';


const Login = () => {

  const [currentState, setCurrentState] = useState("Sign Up");
  const [close, setClose] = useState(false);
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [userData, setUserData] = useState();
  const [errors, setErrors] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { user } = useContext(DataContext);


  const submits = async (e) => {
    e.preventDefault();

    let tempErrors = {};
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!name || !nameRegex.test(name)) {
      tempErrors.name = 'Name must contain letters and numbers';
    }
    if (!email || !emailRegex.test(email)) {
      tempErrors.email = 'Email is not valid.';
    }
    if (!password || !passwordRegex.test(password)) {
      tempErrors.password = 'Password must be contain one letter and one number';
    }

    setErrors(tempErrors);



    if (Object.keys(tempErrors).length === 0) {
      try {
        const response = await fetch('https://jobease-backend.vercel.app/login', {
          method: 'POST',
          body: JSON.stringify({ name, email, password }),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const result = await response.json();
        setUserData(result);
        alert("Registration Succesful^-^")

      } catch (err) {
        console.error(err)
      }
    }
  }


  const handleLogin = (e) => {
    e.preventDefault();

    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!email || !emailRegex.test(email)) {
      tempErrors.email = 'Email is not valid.';
    }
    if (!password || !passwordRegex.test(password)) {
      tempErrors.password = 'Password must be contain one letter and one number';
    }
    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      const User = user.find(
        (user) => user.email === email && user.password === password
      );

      if (User) {
        alert("Login successful");
        setIsLoggedIn(true);
      } else {
        alert("User could not be found. Please register.");
      }
    }
  }


  return (

    !isLoggedIn ? (


      <div className='login-form1 d-flex flex-row flex-wrap gap-4 justify-content-center align-items-center p-4 '>
        {/* <div className='login-image'>
          <img height="320px" alt="login-imag" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajZmDxDFDHGaR7dASRW_R86ZlgLCa3-GHXA&s' />
        </div> */}
        <div className='login'>
          <form className='login-container'  >
            <h5 className='text-success '>{`Welcome ${name}!!`}</h5>

            <div className='login-title'>
              <h2 className='fw-bold'>{currentState}</h2>
              <i onClick={() => setClose(true)} className="fa-solid fa-xmark fa-lg"></i>
            </div>
            <div className='login-inputs'>
              {currentState === "Login" ? <></> : <><input required type='text' name='name' placeholder='Your Name' onChange={(e) => {
                setName(e.target.value)
                const value = e.target.value;
                setErrors((prevErrors) => {
                  const newErrors = { ...prevErrors };
                  if (value.trim() !== '') delete newErrors.name;
                  return newErrors;
                })
              }}
              />
                {errors.name && (<p className='error-text'>{errors.name}</p>)}</>}

              <input type='email' required placeholder='Your Email' name="email" onChange={(e) => {
                setEmail(e.target.value)
                const value = e.target.value;
                setErrors((prevErrors) => {
                  const newErrors = { ...prevErrors };
                  if (value.trim() !== '') delete newErrors.email;
                  return newErrors;
                })
              }} />
              {errors.email && (<p className='error-text'>{errors.email}</p>)}


              <input type='password' required placeholder='Password' name='password' onChange={(e) => {
                setPassword(e.target.value)
                const value = e.target.value;
                setErrors((prevErrors) => {
                  const newErrors = { ...prevErrors };
                  if (value.trim() !== '') delete newErrors.password;
                  return newErrors;
                })
              }
              } />
              {errors.password && (<p className='error-text'>{errors.password}</p>)}

              <div className='login-condition'>
                <input type='checkbox' required className='mt-3' />
                <p>I agree terms of use & privacy policy.</p>
              </div>
            </div>
            {currentState === "Sign Up" ? <button type='submit' onClick={submits}>Create account</button> : <button type='submit' onClick={handleLogin} >LogIn</button>}

            {currentState === "Login"
              ? <p>Create a new account? <span onClick={() => setCurrentState("Sign Up")}>Click here</span></p>
              : <p>Already have an account? <span onClick={() => setCurrentState("Login")}>Login here</span></p>
            }

          </form>
        </div>
      </div>
    ) : <div></div>
  )
}

export default Login