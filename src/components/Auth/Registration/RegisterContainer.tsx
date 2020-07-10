import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { registerUser } from '../../../redux/auth-reducer'
import { AppStateType } from '../../../redux/redux-store'
import Register from './Register'
import { Spin } from 'antd'

const RegisterContainer: React.FC<PropsType> = ({
    registerUser,
    isAuthenticated,
    isFetching,
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
                        <Register
                            isAuthenticated={isAuthenticated}
                            registerUser={registerUser}
                        />
                    )}
                </>
            )}
        </div>
    )
}

type PropsType = MapStatePropsType & DispatchType

type DispatchType = {
    registerUser: (
        password: string,
        fullName: string,
        email: string,
        password2: string
    ) => void
}

type MapStatePropsType = ReturnType<typeof MapStateToProps>

const MapStateToProps = (state: AppStateType) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching,
    }
}

export default connect(MapStateToProps, { registerUser })(RegisterContainer)
