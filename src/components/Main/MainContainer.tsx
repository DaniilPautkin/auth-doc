import React from 'react'
import Main from './Main'
import { Button } from 'antd'
import { connect } from 'react-redux'
import { logoutUser } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'

const MainAuthContainer: React.FC<PropsType> = ({ logoutUser }) => {
    const cardsArr = Array.from(Array(10).keys())
    return (
        <div>
            <Button onClick={logoutUser}>Logout</Button>
            <Main cardsArr={cardsArr} />
        </div>
    )
}

const MapStateToProps = (state: AppStateType) => {
    return {}
}

type PropsType = MapPropsType & DispatchPropsType

type MapPropsType = ReturnType<typeof MapStateToProps>

type DispatchPropsType = {
    logoutUser: () => void
}

const MainContainer = compose<any>(
    connect(MapStateToProps, { logoutUser }),
    withAuthRedirect
)(MainAuthContainer)

export default MainContainer