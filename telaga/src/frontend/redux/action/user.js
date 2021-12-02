import Axios from "axios";
import { API_URL } from "../../constants/API";

export const confirmReg = (data) => {
    console.log(data);
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
  };

  export const confirmLog = (data) => {
    return (dispatch) => {
      Axios.post(API_URL + "/login/", {
        username: data.username,
        password: data.password,
      })
        .then((res) => {
          console.log(`res datalogin is ${res.data.dataLogin}`);
          delete res.data.dataLogin.password;
          localStorage.setItem("userDataTelaga", res.data.token);
          console.log(res.data.dataLogin);
  
          dispatch({
            type: "USER_LOGIN",
            payload: res.data.dataLogin,
          });
        })
        .catch((err) => {
          alert("Login failed");
          console.log(err);
        });
    };
  };