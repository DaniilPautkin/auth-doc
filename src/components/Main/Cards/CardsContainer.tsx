import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { StyledCard, StyledCardsContainer } from '../../../styles/main-styles'
import Text from 'antd/lib/typography/Text'
import { Space, Spin } from 'antd'
import { Preloader } from '../../../styles/app-styles'

const CardsContainer = () => {
    const [items, setItems] = useState(Array.from({ length: 100 }))
    const [hasMore, setHasMore] = useState(true)

    const fetchMoreData = () => {
        if (items.length >= 10000) {
            return setHasMore(false)
        }
        setTimeout(() => {
            setItems(items.concat(Array.from({ length: 100 })))
        }, 500)
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
                    {items.map((i, index) => {
                        let name = Math.random().toString(36).substring(2, 10)
                        let description = Math.random().toString(36).substring(10, 20)
                        return (
                            <StyledCard key={index}>
                            <Text code>
                                {++index}</Text>
                                <Text type='secondary'>{name}</Text>
                                <Text type='secondary'>{description}</Text>
                            </StyledCard>
                        )
                    })}
                </StyledCardsContainer>
            </InfiniteScroll>
        </div>
    )
}
export default CardsContainer
