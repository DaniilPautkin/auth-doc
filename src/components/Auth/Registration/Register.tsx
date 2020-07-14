import { Button, Space } from 'antd'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { NewUserType } from '../../../types/types'
import { createField, GetStringKeys, RFInput } from '../../common/FormsControls'
import { required } from '../../utils/validator/validator'
import { StyledAuthContainer, AuthButtonsContainer, ConfirmAuthButton } from '../../../styles/auth-styles'
import { StyledButton } from '../../../styles/app-styles'

const RegisterForm: React.FC<RegisterFormValuesType & any> = ({
    error,
    handleSubmit,
}) => {
    return (
        <StyledAuthContainer>
            <div>
                {createField<RegisterFormValuesTypeKeys>(
                    'Fullname...',
                    'fullName',
                    [required],
                    RFInput,
                    {},
                    'Fullname'
                )}
            </div>
            <div>
                {createField<RegisterFormValuesTypeKeys>(
                    'Email...',
                    'email',
                    [required],
                    RFInput,
                    {},
                    'Email'
                )}
            </div>
            <div>
                {createField<RegisterFormValuesTypeKeys>(
                    'Password...',
                    'password',
                    [required],
                    RFInput,
                    {
                        type: 'password',
                    },
                    'Password'
                )}
            </div>
            <div>
                {createField<RegisterFormValuesTypeKeys>(
                    'Confirm password...',
                    'password2',
                    [required],
                    RFInput,
                    {
                        type: 'password',
                    },
                    'Confirm password: '
                )}
            </div>
            <AuthButtonsContainer>
                {error && <Text type="warning">{error}</Text>}
                <Button type="link">
                    <NavLink to="/auth/login">Log In</NavLink>
                </Button>
                <ConfirmAuthButton onClick={handleSubmit}>
                    Register
                </ConfirmAuthButton>
            </AuthButtonsContainer>
        </StyledAuthContainer>
    )
}

const Register: React.FC<MapStatePropsType & DispatchType> = ({
    isAuthenticated,
    registerUser,
}) => {
    const history = useHistory()
    const submit = (formData: RegisterFormValuesType) => {
        registerUser(
            formData.fullName,
            formData.email,
            formData.password,
            formData.password2
        )
        history.push('/auth/login')
    }

    if (isAuthenticated) {
        return <Redirect to={'/api/login'} />
    }

    return (
        <div>
            <RegisterReduxForm onSubmit={submit} />
        </div>
    )
}

const RegisterReduxForm = reduxForm<RegisterFormValuesType>({
    form: 'register',
})(RegisterForm)

type RegisterFormValuesTypeKeys = GetStringKeys<NewUserType>

export type RegisterFormValuesType = {
    fullName: string
    email: string
    password: string
    password2: string
}

type DispatchType = {
    registerUser: (
        fullName: string,
        email: string,
        password: string,
        password2: string
    ) => void
}

type MapStatePropsType = {
    isAuthenticated: boolean
}

export default Register
