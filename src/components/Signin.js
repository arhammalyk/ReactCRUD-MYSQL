import React, { useState } from "react";
import { actionSignInUser } from "../state";
import { useDispatch } from "react-redux";

function Signin() {
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionSignInUser(userCredentials));
  };
  const onChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="mt-20">
        <div className="m-auto">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                onChange={onChange}
                value={userCredentials.email}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                onChange={onChange}
                value={userCredentials.password}
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <div>
              <button type="submit" className="bg-black text-white p-2">
                signin
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
