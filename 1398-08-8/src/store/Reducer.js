import *as Types from './ActionType'

const initialState = {
    authentication: true,
    data_tracking: "null",
    waybillNumber: " ",
    userName: '',
    password: '',
    searchParam:null
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {

        case Types.SET_AUTHENTICATE:
            newState.authentication = action.payload;
            localStorage.setItem("authentication", JSON.stringify(action.payload));
            // newState.test = newState.test+1;
            break;

        case Types.SET_DATA_TRACKING:
            newState.data_tracking = action.payload;
            console.log(" Types.SET_DATA_TRACKING", newState.data_tracking);
            localStorage.setItem("data_tracking", JSON.stringify(action.payload));
            break;

        case Types.SET_WAYBILLNUMBER:
            newState.waybillNumber = action.payload;
            localStorage.setItem("waybillNumber", JSON.stringify(action.payload));
            break;
        case Types.SET_USERNAME:
            newState.userName = action.payload;
            localStorage.setItem("userName", JSON.stringify(action.payload));
            break;
        case Types.SET_PASSWORD:
            newState.password = action.payload;
            localStorage.setItem("password", JSON.stringify(action.payload));
            break;
        case Types.SET_SEARCHPARAM:
            newState.searchParam = action.payload;
            break;
        default:
    }
    return newState;
}
export default reducer;