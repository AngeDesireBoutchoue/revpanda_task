import {ADD_ITEM, REMOVE_ITEM, RESET_ITEM} from "../../types/home/home";


export const addItem = (item) => {
    return {
        type: ADD_ITEM,
        item:item
    }
}

export const removeItem = (dataId) => {
    return {
        type: REMOVE_ITEM,
        dataId:dataId
    }
}

export const resetItem = () => {
    return {
        type: RESET_ITEM
    }
}