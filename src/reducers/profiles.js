import { 
GET_PROFILES, 
ADD_PROFILE,
EDIT_PROFILE,
GET_PROFILE,
DELETE_PROFILE


} from "../actions/types";

const initialState = {
	profiles: [],
	profile: {}
}

export default function(state=initialState, action) {
	switch(action.type) {
		case GET_PROFILES:
			return {
				...state,
				profiles: action.payload
			}
		case GET_PROFILE:
		case EDIT_PROFILE:
			return {
				...state,
				profile: action.payload
			}
		case ADD_PROFILE:
			return {
				...state,
				profiles: [...state.profiles, action.payload]
			}
		case DELETE_PROFILE:
			return {
				...state,
				profile: {}
			}
		default: 
			return state;
	}
}