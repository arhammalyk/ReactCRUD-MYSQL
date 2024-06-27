import { IS_SIGNIN } from "./userTypes";

export const is_signin = (value) => {
  return {
    type: IS_SIGNIN,
    payload: value,
  };
};

export const actionSignUpUser = (userCredentials) => {
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
      const data = await response.json();
    } catch (error) {
      console.error(error);
    }
  };
};

export const actionSignInUser = (userCredentials) => {
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
      const data = await response.json();
      console.log(data, "front");
      // Optionally, dispatch some action with the response data
      // dispatch({ type: 'SIGNIN_SUCCESS', payload: data });
    } catch (error) {
      console.error(error);
      // Optionally, dispatch some action with the error
      // dispatch({ type: 'SIGNIN_ERROR', payload: error });
    }
  };
};
