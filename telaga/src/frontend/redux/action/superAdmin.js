import Axios from "axios";
import { API_URL } from "../../constants/API";

export const confirmAdd = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/sam/", {
        order_id: data.order_id,
        order_desc: data.order_desc,
        order_spec: data.order_spec,
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