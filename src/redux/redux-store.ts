import { Action, applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import authReducer from './auth-reducer'
import cardsReducer from './cards-reducer'

let rootReducers = combineReducers({
    form: formReducer,
    auth: authReducer,
    cards: cardsReducer
})

let store = createStore(
    rootReducers,
    compose(
        applyMiddleware(thunkMiddleware),
        //@ts-ignore
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
)

//@ts-ignore
window.__store__ = store

export type AppStateType = ReturnType<typeof rootReducers>
export type InferActionsType<T> = T extends {
    [keys: string]: (...args: any[]) => infer U
}
    ? U
    : never
export type BasicThunkType<A extends Action, R = Promise<void>> = ThunkAction<
    R,
    AppStateType,
    unknown,
    A
>

export default store
