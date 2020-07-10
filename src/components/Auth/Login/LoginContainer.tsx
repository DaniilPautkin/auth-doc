import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { loginUser } from '../../../redux/auth-reducer'
import { AppStateType } from '../../../redux/redux-store'
import Login from './Login'
import { Spin } from 'antd'

const LoginContainer: React.FC<PropsType> = ({
    isAuthenticated,
    isFetching,
    loginUser,
}) => {
    return (
        <div>
            {isAuthenticated ? (
                <Redirect to="/" />
            ) : (
                <>
                    {' '}
                    {!!isFetching ? (
                        <Spin />
                    ) : (
                        <Login
                            isAuthenticated={isAuthenticated}
                            loginUser={loginUser}
                        />
                    )}
                </>
            )}
        </div>
    )
}

type PropsType = MapStatePropsType & DispatchType

type DispatchType = {
    loginUser: (email: string, password: string) => void
}

type MapStatePropsType = ReturnType<typeof MapStateToProps>

const MapStateToProps = (state: AppStateType) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching,
    }
}

export default connect(MapStateToProps, { loginUser })(LoginContainer)
