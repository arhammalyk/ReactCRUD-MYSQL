import { IS_SIGNIN } from "./userTypes";

//if user signedin value should be true
export const is_signin = (value) => {
  return {
    type: IS_SIGNIN,
    payload: value,
  };
};

//signup API call
export const actionSignUpUser = (userCredentials, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL}/user/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userCredentials.email,
            password: userCredentials.password,
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.success === true) {
        alert("successfully signed up login to continue");
        navigate("/signin");
      } else {
        alert(responseData.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
};

//signin API call
export const actionSignInUser = (userCredentials, navigate) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_LOCAL}/user/signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: userCredentials.email,
            password: userCredentials.password,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.success === true) {
        alert("successfully logedin");
        navigate("/");
        localStorage.setItem("token", responseData.authJwtToken);
        dispatch(is_signin(true));
      }
    } catch (error) {
      console.error(error);
    }
  };
};
