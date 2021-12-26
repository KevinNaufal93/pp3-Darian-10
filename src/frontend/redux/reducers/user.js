const init_state = {
  user_id:"",
  username: "",
  fullname: "",
  email: "",
  auth_status: "",
  errMsg: "",
  storageIsChecked:false,
  popupTrigger: false,
  tasks: "",
  searchTask: "",
};

const reducer = (state = init_state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
        return {...state,...action.payload, storageIsChecked:true}
    case "TASK_GET":
        return {...state, tasks: action.payload}
    case "TASK_SEARCH":
        return {...state, searchTask: action.payload}
    case "USER_ERROR":
        return {...state, errMsg: action.payload}
    case "USER_LOGOUT":
        return {...init_state,storageIsChecked:true};
    case "CHECK_STORAGE":
        return {...state, storageIsChecked:true}
    case "POPUP_TRIGGER_TRUE":
        return {...state, popupTrigger:true}
    case "POPUP_TRIGGER_FALSE":
        return {...state, popupTrigger:false}
    default:
        return state;
  }
};

export default reducer;
