import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useFirebase from "./Firebase/useFirebase";

const LogIn = () => {
  const [error, setError] = useState("");
  const { LogInWithEmain } = useFirebase();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const url = location?.state?.from?.pathname || "/";

  function handleInput(e) {
    const name = e.target.name;
    setUser({ ...user, [name]: e.target.value });
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await LogInWithEmain(user.email, user.password);
      const userData = result.user;
      if (userData) {
        setError("");
        navigate(url);
      } else throw Error({ message: "error" });
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={(e) => onSubmit(e)} className='login-container form'>
        <input
          type='email'
          onChange={(e) => handleInput(e)}
          required
          name='email'
          placeholder='Your Email'
        />
        <input
          type='password'
          required
          name='password'
          onChange={(e) => handleInput(e)}
          placeholder='Your Password'
        />
        {error && <p className='text-red-400 text-xl'>{error}</p>}
        <button type='submit' className='btn mt-5'>
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
