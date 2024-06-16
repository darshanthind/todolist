import { createStore } from "redux";
const inslist = {
    list: []
}

function Stores(state = inslist, action) {
    if (action.type == "ADD") {
        return { ...state, list: [...state.list, action.payload] };
    } else if (action.type == "DEL") {
        state.list.splice(parseInt(action.payload), 1);
        const newlist = [...state.list];
        console.log(newlist);
        return { ...state, list: newlist };
    } else if (action.type == "EDIT") {
        state.list[action.payload.index] = action.payload.change;
        return {
            ...state, list: state.list
        };
    }

    return state;
}

const Store = createStore(Stores);

export default Store;