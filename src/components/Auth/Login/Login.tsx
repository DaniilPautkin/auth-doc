import { Button, Space } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { ExistingUserType } from '../../../types/types'
import { createField, GetStringKeys, RFInput } from '../../common/FormsControls'
import { required } from '../../utils/validator/validator'
import { StyledAuthContainer, AuthButtonsContainer, ConfirmAuthButton } from '../../../styles/auth-styles'
import { StyledButton } from '../../../styles/app-styles'

const LoginForm: React.FC<LoginFormValuesType & any> = ({
    error,
    handleSubmit,
}) => {
    return (
        <StyledAuthContainer>
            <div>
                {createField<LoginFormValuesTypeKeys>(
                    'Email: ',
                    'email',
                    [required, ],
                    RFInput,
                    {},
                    'Email'
                )}
            </div>
            <div>
                {createField<LoginFormValuesTypeKeys>(
                    'Password: ',
                    'password',
                    [required],
                    RFInput,
                    {
                        type: 'password',
                    },
                    'Password'
                )}
            </div>
            <AuthButtonsContainer>
                {error && <Text type="warning">{error}</Text>}
                <Button type="link">
                    <NavLink to="/auth/register">Sing Up</NavLink>
                </Button>
                <ConfirmAuthButton onClick={handleSubmit}>
                    Sing In
                </ConfirmAuthButton>
            </AuthButtonsContainer>
        </StyledAuthContainer>
    )
}

const Login: React.FC<MapStatePropsType & DispatchType> = ({
    isAuthenticated,
    loginUser,
}) => {
    const submit = (formData: LoginFormValuesType) => {
        loginUser(formData.email, formData.password)
    }

    if (isAuthenticated) {
        return <Redirect to={'/'} />
    }

    return (
        <div>
            <LoginReduxForm onSubmit={submit} />
        </div>
    )
}

const LoginReduxForm = reduxForm<LoginFormValuesType>({
    form: 'login',
})(LoginForm)

type LoginFormValuesTypeKeys = GetStringKeys<ExistingUserType>

export type LoginFormValuesType = {
    email: string
    password: string
}

type DispatchType = {
    loginUser: (email: string, password: string) => void
}

type MapStatePropsType = {
    isAuthenticated: boolean
}

export default Login
