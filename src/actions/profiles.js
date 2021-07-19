import axios from "axios";
import { createMessage, returnError } from './messages';
import { tokenConfig } from './auth';
import { 
GET_PROFILES,
GET_PROFILE,
ADD_PROFILE,
EDIT_PROFILE,
DELETE_PROFILE
 } from "./types";

// GET PROFILES
export const getProfiles = () => (dispatch, getState) => {
	axios
	.get('https://konect-backend-api.herokuapp.com/konnect/backend/api/serviceprovider/profiles/', tokenConfig(getState))
	//.get('http://localhost:8000/konnect/backend/api/serviceprovider/profiles/', tokenConfig(getState))
	.then(res => {
		dispatch({
			type: GET_PROFILES,
			payload: res.data
		});
	})
	.catch(err => dispatch(
		returnError(err.response.data, err.response.status)));
}
// GET PROFILE BY ID
export const getProfile = (id) => (dispatch, getState) => {
    axios
    .get(`https://konect-backend-api.herokuapp.com/konnect/backend/api/serviceprovider/profiles/${id}`, tokenConfig(getState))
	//.get(`http://localhost:8000/konnect/backend/api/serviceprovider/profiles/${id}`, tokenConfig(getState))
	.then(res => {
		dispatch({
			type: GET_PROFILE,
			payload: res.data
		});
	})
	.catch(err => dispatch(
		returnError(err.response.data, err.response.status)));
}

// EDITING PROFILES
export const editProfile = (id, profile) => (dispatch, getState) => {
    axios
    .put(`https://konect-backend-api.herokuapp.com/konnect/backend/api/serviceprovider/profiles/${id}/`, profile, tokenConfig(getState))
	// .put(`http://localhost:8000/konnect/backend/api/serviceprovider/profiles/${id}/`, profile, tokenConfig(getState))
	.then(res => {
		dispatch(
			createMessage({ profileUpdated: "Profile Updated."
			 }));
		dispatch({
			type: EDIT_PROFILE,
			payload: res.data
		});
	})
	.catch(err => dispatch(
		returnError(err.response.data, err.response.status)));
}

// DELETING PROFILES
export const deleteProfile = (id) => (dispatch, getState) => {
    axios
	.delete(`https://konect-backend-api.herokuapp.com/konnect/backend/api/serviceprovider/profiles/${id}/`,tokenConfig(getState))
	//.delete(`http://localhost:8000/konnect/backend/api/serviceprovider/profiles/${id}/`,tokenConfig(getState))
	.then(res => {
		dispatch(
			createMessage({ profiledeleted: "Profile Deleted"
			 }));
		dispatch({
			type: DELETE_PROFILE,
			payload: res.data
		});
	})
	.catch(err => dispatch(
		returnError(err.response.data, err.response.status)));
}


//ADD PROFILES
export const addProfile = (profile) => (dispatch, getState) => {
	axios
	.post('https://konect-backend-api.herokuapp.com/konnect/backend/api/serviceprovider/profiles/', profile, tokenConfig(getState))
	//.post('http://localhost:8000/konnect/backend/api/serviceprovider/profiles/', profile, tokenConfig(getState))
	.then(res => {
		dispatch(
			createMessage({ profileAdded: "New Profile Added."
			 }));
		dispatch({
			type: ADD_PROFILE,
			payload: res.data
		});
	})
	.catch(err => dispatch(
		returnError(err.response.data, err.response.status)));
}
