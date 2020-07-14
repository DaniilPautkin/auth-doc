import { Button } from 'antd'
import React from 'react'
import { compose } from 'redux'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import CardsContainer from './Cards/Cards'

const MainContainer: React.FC<PropsType> = ({ logoutUser }) => {
    return (
        <>
            <div>
                <Button onClick={logoutUser}>Logout</Button>
            </div>
            <CardsContainer />
        </>
    )
}

type PropsType = DispatchPropsType

type DispatchPropsType = {
    logoutUser: () => void
}

export default compose<React.ComponentType>(withAuthRedirect)(MainContainer)
