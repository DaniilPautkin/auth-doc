import styled from 'styled-components'
import { Spin, Button } from 'antd'

export const StyledMainContainer = styled.div`
width: 80%;
border-radius: 10px;
margin: 0 auto;
background: #f2f2f2;
box-shadow:  16px 16px 32px #c2c2c2, 
             -16px -16px 32px #ffffff;
             @media (max-width: 900px) {
        width: 90%;
    }
`

export const MainHeader = styled.div`
display: flex;
justify-content: space-between;
padding: 10px;
`

export const StyledButton = styled(Button)`
border: none;
border-radius: 10px;
background: linear-gradient(145deg, #ffffff, #d9d9d9);
box-shadow:  4px 4px 8px #dbdbdb, 
             -4px -4px 8px #ffffff;

    :active,
    :focus,
    :hover {
       background: linear-gradient(145deg, #d9d9d9, #ffffff);
       box-shadow:  4px 4px 8px #dbdbdb, 
                   -4px -4px 8px #ffffff;
    }
`

export const Preloader = styled(Spin)`
margin: 0 auto;
margin: 10px;
`