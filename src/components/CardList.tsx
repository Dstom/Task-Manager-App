import React from 'react'
import { Cardlist } from '../model/types'
import { CardItem } from './Card';
import { PlusIcon } from '@heroicons/react/24/outline';
import { CardModal } from './CardModal';
import { NewCard } from './NewCard';

type Props = {
    myCardlist: Cardlist,
}

export const CardList = ({ myCardlist }: Props) => {
    const { name, cards } = myCardlist;


    return (
        <div className='flex flex-col min-w-72 w-72 bg-slate-100 rounded-xl max-h-full relative z-[1] pb-2 '>
            <h3 className='mb-2 p-2 sticky top-0 bg-slate-100 rounded-xl'>{name}</h3>
            <div className='max-h-full overflow-x-hidden overflow-y-auto mb-2 p-2'>
                {
                    cards.map(card => (
                        <CardItem key={card.id} myCard={card} />
                    ))
                }
            </div>
            <NewCard />
        </div>
    )
}
