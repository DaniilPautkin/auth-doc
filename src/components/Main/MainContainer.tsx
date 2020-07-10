import { Button } from 'antd'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { logoutUser } from '../../redux/auth-reducer'
import { cardsActions } from '../../redux/cards-reducer'
import { AppStateType } from '../../redux/redux-store'
import { withAuthRedirect } from '../hoc/withAuthRedirect'
import CardsContainer from './Cards/CardsContainer'
import { CardType } from 'antd/lib/card'

const MainContainer: React.FC<any> = ({ cards, logoutUser, setCards }) => {
    return (
        <>
            <div>
                <Button onClick={logoutUser}>Logout</Button>
            </div>
            <CardsContainer setCards={setCards} cards={cards} />
        </>
    )
}

const MapStateToProps = (state: AppStateType) => {
    return {
        cards: state.cards.cards
    }
}

type PropsType = MapPropsType & DispatchPropsType

type MapPropsType = ReturnType<typeof MapStateToProps>

type DispatchPropsType = {
    setCards: (cards: CardType[]) => void
    logoutUser: () => void
}

export default compose<any>(connect(MapStateToProps, { setCards: cardsActions.setCards, logoutUser }), withAuthRedirect)(MainContainer)
