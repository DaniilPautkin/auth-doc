import React from 'react'

const Main: React.FC<PropsType> = ({ cardsArr }) => {
    return (
        <div>
            {cardsArr.map((card, index) => {
    let r = Math.random().toString(36).substring(2, 10);
                return <div key={index}>{r}</div>
                })}
        </div>
    )
}

type PropsType = MapStateType

type MapStateType = {
    cardsArr: number[]
}

export default Main
