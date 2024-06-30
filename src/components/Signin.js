import React, { useState } from "react";
import { actionSignInUser } from "../state";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionSignInUser(userCredentials, navigate));
  };
  const onChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <div className="mt-24 w-full flex justify-center md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl m-auto">
        <div className="w-11/12 lg:w-1/2 bg-white py-12">
          <form className="w-1/2 m-auto" onSubmit={handleSubmit}>
            <div>
              <h1 className="mb-4 font-semibold">Signin to continue</h1>
              <input
                className="pl-2 border border-[#1868db] rounded-3xl w-full h-9"
                placeholder="email"
                onChange={onChange}
                value={userCredentials.email}
                type="email"
                name="email"
                id="email"
                required
              />
            </div>
            <div>
              <input
                className="pl-2 border border-[#1868db] rounded-3xl w-full h-9 mt-2"
                placeholder="password"
                onChange={onChange}
                value={userCredentials.password}
                type="password"
                name="password"
                id="password"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#1868db] text-white px-3 py-2 rounded-3xl mt-4 w-full hover:bg-blue-700 active:bg-blue-400"
              >
                signin
              </button>
              <h2>
                create account
                <span
                  onClick={() => {
                    navigate("/signup");
                  }}
                  className="cursor-pointer underline ml-1"
                >
                  signup
                </span>
              </h2>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
