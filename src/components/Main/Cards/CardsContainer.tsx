import { CardType } from 'antd/lib/card'
import Text from 'antd/lib/typography/Text'
import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Preloader } from '../../../styles/app-styles'
import { StyledCard, StyledCardsContainer } from '../../../styles/main-styles'

const CardsContainer: React.FC<PropsType> = ({ setCards, cards }) => {
    const [hasMore, setHasMore] = useState(true)

    const _arrayLimit = 10000
    const _arrayCount = 200
    let items: any = [{name: 'Dan', description: '123'}]

    let getRandomItems = () => {
        for (let i = 0; i < _arrayCount; i++)
        items.push({
                name: Math.random().toString(36).substring(2, 5),
                description: Math.random().toString(36).substring(2, 5),
            })
    }

    // const [items, setItems] = useState(Array.from({ length: 300 }))
    // console.log('items', itemsArr)

    // const fetchMoreData = () => {
    //     if (cards.length >= 500) {
    //         return setHasMore(false)
    //     }
    //     setTimeout(() => {
    //         randomCards(cards)
    //     }, 100)
    // }

    useEffect(() => {
        getRandomItems()
    }, [])

    // const randomCards = (cards: any) => {
    //     for (let i = 0; i < 100; i++)
    //         //@ts-ignore
    //         cards.push({
    //             name: Math.random().toString(36).substring(2, 5),
    //             description: Math.random().toString(36).substring(2, 5),
    //         })
    //     setCards(cards)
    // }

    const fetchMoreData = () => {
        //@ts-ignore
        if (items.length >= _arrayLimit) {
            return setHasMore(false)
        }
        //@ts-ignore
       getRandomItems()
    }

    return (
        <div>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<Preloader />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <Text type="danger">Thats all</Text>
                    </p>
                }
            >
                <StyledCardsContainer>
                    {items && items.map((item: any, index: any) => (
                        <StyledCard key={index}>
                            <Text code>{++index}</Text>
                            <Text type="secondary">{item.name}</Text>
                            <Text type="secondary">{item.description}</Text>
                        </StyledCard>
                    ))}
                </StyledCardsContainer>
            </InfiniteScroll>
        </div>
    )
}

type PropsType = MapPropsType & DispatchType

type MapPropsType = {
    cards: CardType[]
}

type DispatchType = {
    setCards: (cards: CardType[]) => void
}

export default CardsContainer
