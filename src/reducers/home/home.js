import * as actionTypes from "../../types/home/home";

const initialState = {
    data: [],
    addstatus: false
};

const ReducerHome = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                data: state.data.concat(action.item),
                addstatus: true
            };
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                data: state.data.filter(index => index.id !== action.dataId)
            };
        case actionTypes.RESET_ITEM:
            return {
                ...state,
                addstatus: false
            };
        default:
            return state;
    }
};

export default ReducerHome;
