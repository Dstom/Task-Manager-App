import React from 'react'
import { Cardlist } from '../model/types'
import { CardItem } from './Card';
import { PlusIcon } from '@heroicons/react/24/outline';

type Props = {
    myCardlist: Cardlist,
}

export const CardList = ({ myCardlist }: Props) => {
    const { name, cards } = myCardlist;
    return (
        <div className='min-w-72 w-72 overflow-y-auto bg-slate-100 rounded-md p-2'>
            <h3 className='mb-2'>{name}</h3>
            <div className='overflow-x-hidden overflow-y-auto'>
                {
                    cards.map(card => (
                        <CardItem myCard={card} />
                    ))
                }
            </div>
            <div className='py-1 px-3 rounded-md flex items-center text-sm hover:bg-zinc-300 hover:cursor-pointer transition ease-in duration-75'>
                <PlusIcon className='h-4 w-4 dark:text-white inline' />
                Add new task card
            </div>
        </div>
    )
}
