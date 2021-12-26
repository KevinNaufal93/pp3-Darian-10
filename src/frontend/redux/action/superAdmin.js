import Axios from "axios";
import { API_URL } from "../../constants/API";

export const confirmAdd = (data) => {
    //console.log(data);
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
        deadline: data.deadline.slice(0, 19).replace('T', ' '),
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

  export const updateOrder = (data) => {
    console.log(data);
    return (dispatch) => {
      Axios.post(API_URL + "/tm/update", {
        so: data.so,
        design: data.design,
        potong: data.potong,
        press: data.press,
        sablon: data.sablon,
        bordir: data.bordir,
        jahit: data.jahit,
        finishing: data.finishing,
        deadline: data.deadline.slice(0, 19).replace('T', ' '),
        order_status: data.order_status,
      })
        .then((res) => {
          alert("Order successfully updated");
        })
        .catch((err) => {
          alert("Order Registration failed");
          console.log(err);
        });
      };
  };

  export const searchOrd = (tmSo) => {
    console.log(tmSo);
    return (dispatch) => {
      Axios.post(API_URL + "/search/so", {
        so: tmSo,
      })
        .then((res) => {
          alert("Search finished");
          console.log(res.data.data[0]);
          dispatch({
            type: "TASK_SEARCH",
            payload: res.data.data[0],
          });
        })
        .catch((err) => {
          alert("Search failed, order has probably finished");
          console.log(err);
        });
      };
  };

