import Axios from "axios";
import { API_URL } from "../../constants/API";

export const confirmAdd = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/sam/", {
        so: data.so,
        client: data.client,
        product: data.product,
        design: data.design,
        potong: data.potong,
        press: data.press,
        sablon: data.sablon,
        bordir: data.bordir,
        jahit: data.jahit,
        finishing: data.finishing,
        deadline: data.deadline,
        order_status: data.order_status,
      })
        .then((res) => {
          alert("Order successfully added");
        })
        .catch((err) => {
          alert("Order Registration failed");
          console.log(err);
        });
      };
  };