import { CardType } from "../types/types";
import { InferActionsType } from './redux-store';

const initialState = {
    cards: [] as CardType[]
}

const authReducer = (state = initialState, action: ActionsType): typeof initialState => {
    switch (action.type) {
        case 'AUTH-DOC/CARDS/SET_CARDS':
            return {
                ...state,
                cards: state.cards.concat(action.cards)
            }
        default:
            return state
    }
}

export const cardsActions = {
    setCards: (cards: CardType[]) => ({ type: 'AUTH-DOC/CARDS/SET_CARDS', cards } as const),
}



type ActionsType = InferActionsType<typeof cardsActions>

export default authReducer