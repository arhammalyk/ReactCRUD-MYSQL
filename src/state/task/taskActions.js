export const actionAddNewTask = (task) => {
  return async (dispatch) => {
    try {
      console.log(task);
      // const res = await fetch("http://localhost:3003/user/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     userName: userCredentials.username,
      //     email: userCredentials.email,
      //     password: userCredentials.password,
      //   }),
      // });
      // const json = await res.json();
      // alert(json.message);
      // console.log("hereeee", json);
    } catch (error) {
      console.error(error);
    }
  };
};
