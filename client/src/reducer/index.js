import { GET_CHARACTERS, GET_DETAIL } from "../actions/characterActions";

const initialState = {
    characters: [],
    detail: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            };
        case GET_DETAIL:
            return{
                ...state,
                detail: action.payload
                } 
        default: {
            return {
                ...state
            
            }
        }
    }
}    

export default reducer;