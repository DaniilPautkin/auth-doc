import React from 'react'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import CardsContainer from './Cards/Cards'
import { AppStateType } from '../../redux/redux-store'
import { connect } from 'react-redux'
import Text from 'antd/lib/typography/Text'
import { MainHeader, StyledButton } from '../../styles/app-styles'
import { logoutUser } from '../../redux/auth-reducer'

const MainContainer: React.FC<PropsType> = ({ user, logoutUser }) => {
    return (
        <>
            <MainHeader>
                <Text>{user.name}</Text>
                <StyledButton onClick={logoutUser}>Logout</StyledButton>
            </MainHeader>
            <CardsContainer />
        </>
    )
}

const MapStateToProps = (state: AppStateType) => {
    return {
        user: state.auth.user
    }
}

type PropsType = DispatchPropsType & MapPropsType

type MapPropsType = ReturnType<typeof MapStateToProps>

type DispatchPropsType = {
    logoutUser: () => void
}

export default compose<React.ComponentType>(connect(MapStateToProps, { logoutUser} ),withAuthRedirect)(MainContainer)
