// import React from 'react'

const init = {
    profileError: [],
}
const profileReducer = (state = init, action) => {
    if (action.type === "SET_PROFILE_ERRORS")
        return { ...state, profileError: action.payload }
    else if (action.type === "RESET_PROFILE_ERRORS")
        return { ...state, profileError: [] }
    else
        return state;
}

export default profileReducer