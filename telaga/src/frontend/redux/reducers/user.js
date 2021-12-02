const init_state = {
  user_id:"",
  username: "",
  fullname: "",
  email: "",
  auth_status: "",
  errMsg: "",
  storageIsChecked:false,
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
