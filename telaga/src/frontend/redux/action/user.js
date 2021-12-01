import Axios from "axios";
import { API_URL } from "../../constants/API";

export const confirmReg = (data) => {
    if(data.password === data.confirmPassword) {
    return (dispatch) => {
      Axios.post(API_URL + "/register/", {
        username: data.username,
        email: data.email,
        password: data.password,
        fullname: data.fullname,
        gender: data.gender,
        age: data.age,
        auth_status: "user",
      })
        .then((res) => {
          alert("Registration successful");
          console.log(`data registered for processing ${res.data}`);
          dispatch({
            type: "USER_LOGIN",
            payload: res.data[0],
          });
        })
        .catch((err) => {
          alert("Registration failed");
          console.log(err);
        });
      };
    } else {
      alert("Wrong password or doesnt match")
    }
  };