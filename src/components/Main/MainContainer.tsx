import { Button } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { logoutUser } from '../../redux/auth-reducer'
import { AppStateType } from '../../redux/redux-store'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import CardsContainer from './Cards/CardsContainer'

const MainContainer: React.FC<any> = ({ logoutUser }) => {
    return (
        <>
            <div>
                <Button onClick={logoutUser}>Logout</Button>
            </div>
            <CardsContainer />
        </>
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

export default compose<any>(connect(MapStateToProps, { logoutUser }), withAuthRedirect)(MainContainer)
