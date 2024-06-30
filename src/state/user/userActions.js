import { showAlert } from "../alert/alertActions";
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
        dispatch(showAlert("Successfully signed up", "success", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
        navigate("/signin");
      } else {
        dispatch(showAlert("Enter correct credentials", "failure", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
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
        dispatch(showAlert("Successfully signed in", "success", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
        navigate("/");
        localStorage.setItem("token", responseData.authJwtToken);
        dispatch(is_signin(true));
      } else {
        dispatch(showAlert(responseData.message, "failure", true));
        setTimeout(() => {
          dispatch(showAlert("", "", false));
        }, 4000);
      }
    } catch (error) {
      console.error(error);
    }
  };
};
