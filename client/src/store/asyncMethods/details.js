import axios from "axios"


function fetchdetails(id) {
    return async (dispatch) => {
        dispatch({ type: "SET_LOADER" })
        try {
            const response = await axios.get('http://localhost:5000/details/'+ id)
            // const data = response.data.posts
            dispatch({ type: "CLOSE_LOADER" })
            dispatch({type:"SET_DETAILS" , payload : response.data.post})
        } catch (error) {
            console.log(error)
            dispatch({ type: "CLOSE_LOADER" })
        }
    }
}

export default fetchdetails