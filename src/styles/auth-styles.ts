import styled from 'styled-components'
import { StyledButton } from './app-styles'

export const StyledAuthContainer = styled.div`
padding: 20px;
    width: 30%;
    display: block;
    margin: auto;
    Text {
        margin: 0px !important;
    }
    Input {
        margin: 10px 0px 10px 0px;
    }
    Button {
        align-self: center;
        width: 50%;
    }
`

export const AuthContainer = styled.div`
margin: auto;
width: 100%;
`

export const ConfirmAuthButton = styled(StyledButton)`
color: #777777;
`

export const AuthButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    Button {
        width: 50%;
    }
`
