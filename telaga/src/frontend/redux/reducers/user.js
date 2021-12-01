const init_state = {
  user_id:"",
  username: "",
  fullname: "",
  email: "",
  auth_status: "",
  user_id: 0,
  errMsg: "",
  searchProduct:"",
  pic_location:"",
  address:"",
  defAddress:"",
  storageIsChecked:false,
  cart_id: 0,
  checkStatusPlaceHolder: ""
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
        return {...state,...action.payload, storageIsChecked:true}
    case "USER_ERROR":
        return {...state, errMsg: action.payload}
    case "USER_LOGOUT":
        return {...init_state,storageIsChecked:true};
    case "CHECK_STORAGE":
        return {...state, storageIsChecked:true}
    default:
        return state;
  }
};

export default reducer;
