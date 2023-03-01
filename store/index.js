// import { configureStore } from "@reduxjs/toolkit";
const { configureStore } = require("@reduxjs/toolkit");

const reducer = (state={}, action) => {
    switch (action.type) {
        case 'SET_FORM_STATE':
            return {...state, ...action.payload}
    }
    return state
}

const store = configureStore({
    reducer
})

export default store