import styled from 'styled-components'
import { Spin } from 'antd'

export const StyledMainContainer = styled.div`
width: 80%;
margin: 0 auto;
background: #f2f2f2;
box-shadow:  16px 16px 32px #c2c2c2, 
             -16px -16px 32px #ffffff;
`

export const Preloader = styled(Spin)`
margin: 0 auto;
margin: 10px;
`