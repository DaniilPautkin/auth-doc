import isEmpty from "is-empty";
import jwt_decode from "jwt-decode";
import { Dispatch } from 'react';
import { authAPI } from "../api/auth-api";
import setAuthToken from "../components/utils/setAuthToken";
import { LoggedUserType } from './../types/types';
import { BasicThunkType, InferActionsType } from './redux-store';

const initialState = {
    isAuthenticated: false,
    user: {} as LoggedUserType,
    isFetching: false
}

const authReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case 'EMPLOYEES-REACT/USER/AUTH/SET_USER':
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }
        case 'EMPLOYEES-REACT/USER/AUTH/TOGGLE_IS_FETCHING':
            return { ...state, isFetching: action.isFetching }
        default:
            return state
    }
}

export const authActions = {
    toggleIsFetching: (isFetching: boolean) => ({ type: 'EMPLOYEES-REACT/USER/AUTH/TOGGLE_IS_FETCHING', isFetching: isFetching } as const),
    setCurrentUser: (decoded: any) => ({ type: 'EMPLOYEES-REACT/USER/AUTH/SET_USER', payload: decoded } as const),
}

export const registerUser = (fullName: string, email: string, password: string, password2: string): ThunkType => async (dispatch: any) => {
    try {
        await authAPI.register(fullName,
            email,
            password,
            password2)
    } catch (err) {
    }
}

export const loginUser = (email: string,
    password: string): ThunkType => async (dispatch: Dispatch<ActionsType>) => {
        try {
            let res = await authAPI.login(email,
                password)

            const { token } = res.data
            localStorage.setItem("jwtToken", token)
            setAuthToken(token)
            const decoded = await jwt_decode(token)
            dispatch(authActions.setCurrentUser(decoded))

        } catch (err) {
        }
    }

export const logoutUser = () => (dispatch: Dispatch<ActionsType>) => {
    localStorage.removeItem("jwtToken")
    setAuthToken(false)
    dispatch(authActions.setCurrentUser({}))
}

type ActionsType = InferActionsType<typeof authActions>
type ThunkType = BasicThunkType<ActionsType>

export default authReducer