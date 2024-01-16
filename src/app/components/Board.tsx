import React from 'react'
import { CardList } from './CardList'
import { Cardlist } from '../model/types'

const myCardList: Cardlist[] = [
    {
        id: "1", name: "Backlog",
        cards: [{
            id: "1", title: "ga", cardListId: "1", tags:
                [{ id: "1", cardId: "1", name: "Concept", background: "#8d2626" },
                { id: "2", cardId: "1", name: "Concept", background: "#4757a7" },
                { id: "3", cardId: "1", name: "Concept", background: "#84247f" },
                { id: "4", cardId: "1", name: "asd", background: "#000" },
                ]
        }
        ]
    }
]

export const Board = () => {
    return (
        <div className='board overflow-x-auto'>
            {
                myCardList.map(cardlist => (
                    <CardList myCardlist={cardlist} />
                ))
            }
        </div>
    )
}

/* 
#164b35 #216e4e #4bce97
#09326c #0055cc #579dff
#533f04 #7f5f01 #e2b203 #164555 #206a83 #6cc3e0
#702e00 #a54800 #fea362 #37471f #4c6b1f #94c748
#5d1f1a #ae2e24 #f87168 #50253f #943d73 #e774bb
#352c63 #5e4db2 #9f8fef #454f59 #596773 #8c9bab
*/