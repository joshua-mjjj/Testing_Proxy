import axios from 'axios';
import {  createMessage, returnError } from './messages';
import { 
USER_LOADING, 
USER_LOADED, 
AUTH_ERROR, 
LOGIN_SUCCESS, 
LOGIN_FAIL,
LOGOUT_SUCCESS,  
REGISTER_SUCCESS, 
REGISTER_FAIL 
} from './types';

// CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
	// user Loading
	dispatch({ type: USER_LOADING });

	axios
	.get('https://konect-backend-api.herokuapp.com/konnect/backend/api/authentication/auth/user', tokenConfig(getState))
	//.get('http://localhost:8000/konnect/backend/api/authentication/auth/user', tokenConfig(getState))
	.then(res => {
		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	})
	.catch(err => {
		dispatch(returnError(err.response.data, err.response.status));
		dispatch({
			type: AUTH_ERROR
		});
	});
}

// // LOGIN USER
export const login = (username, password) => dispatch => {
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	// Request Body 
	const body = JSON.stringify({username, password})

	axios
	.post('https://konect-backend-api.herokuapp.com/konnect/backend/api/authentication/auth/login', body, config)
	//.post('http://localhost:8000/konnect/backend/api/authentication/auth/login', body, config)
	.then(res => {
		// console.log('res.data')
		// console.log(res.data)
		dispatch(
			createMessage({ loginSuccess: "Hey, Welcome!"
			 }));
		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});
	})
	.catch(err => {
		dispatch(returnError(err.response.data, err.response.status));
		dispatch({
			type: LOGIN_FAIL
		});
	});
}

// REGISTER USER
export const register = ({username, email ,password}) => dispatch => {
	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}
	// Request Body 
	const body = JSON.stringify({username, password, email})
	axios
	.post('https://konect-backend-api.herokuapp.com/konnect/backend/api/authentication/auth/register', body, config)
	//.post('http://localhost:8000/konnect/backend/api/authentication/auth/register', body, config)
	.then(res => {
		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
	})
	.catch(err => {
		dispatch(returnError(err.response.data, err.response.status));
		dispatch({
			type: REGISTER_FAIL
		});
	});
}

// LOGOUT
export const logout = () => (dispatch, getState) => {
    axios.post('https://konect-backend-api.herokuapp.com/konnect/backend/api/authentication/auth/logout', null, tokenConfig(getState))
	//axios.post('http://localhost:8000/konnect/backend/api/authentication/auth/logout', null, tokenConfig(getState))
	.then(res => {
		dispatch({
			type: LOGOUT_SUCCESS,
		});
	})
	.catch(err => {
		dispatch(returnError(err.response.data, err.response.status));
	});
}

// setup config with token - helper function
export const tokenConfig = getState => {
	// Get token from state
	const token = getState().auth.token;

	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json'
		}
	}

	// if token, add to headers in config
	if(token) {
		config.headers['Authorization'] = `Token ${token}`;
	}

	return config
}