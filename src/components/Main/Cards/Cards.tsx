import { CardType } from '../../../types/types'
import Text from 'antd/lib/typography/Text'
import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Preloader } from '../../../styles/app-styles'
import { StyledCard, StyledCardsContainer } from '../../../styles/main-styles'
import { connect } from 'react-redux'
import { cardsActions } from '../../../redux/cards-reducer'
import { AppStateType } from '../../../redux/redux-store'

const CardsContainer: React.FC<PropsType> = ({ cards, setCards }) => {
    const _arrayLimit = 10000
    const _arrayCount = 1000
    const _getRandomData = () =>
        Array.from({ length: _arrayCount }).map((card: any) => {
            return {
                ...card,
                name: Math.random().toString(36).substring(2, 5),
                description: Math.random().toString(36).substring(2, 5),
            }
        })

    const [hasMore, setHasMore] = useState(true)

    const fetchMoreData = () => {
        if (cards.length >= _arrayLimit) {
            setHasMore(false)
            return
        }
        const newArr = _getRandomData()
        setCards(newArr)
    }

    useEffect(() => {
        setCards(_getRandomData())
    }, [])

    return (
        <div>
            <InfiniteScroll
                dataLength={cards.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Preloader />}
                endMessage={<Text type="warning">That's all cards</Text>}
            >
                <StyledCardsContainer>
                    {cards.map((card: CardType, index: number) => (
                        <StyledCard key={index}>
                            <Text code>{++index}</Text>
                            <Text>{card.name}</Text>
                            <Text type="secondary">{card.description}</Text>
                        </StyledCard>
                    ))}
                </StyledCardsContainer>
            </InfiniteScroll>
        </div>
    )
}

const MapStateToProps = (state: AppStateType) => {
    return {
        cards: state.cards.cards,
    }
}

type PropsType = MapPropsType & DispatchType

type MapPropsType = ReturnType<typeof MapStateToProps>

type DispatchType = {
    setCards: (cards: CardType[]) => void
}

export default connect(MapStateToProps, { setCards: cardsActions.setCards })(
    CardsContainer
)
