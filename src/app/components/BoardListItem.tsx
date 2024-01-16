import React from 'react'
import { Icon } from './Icon'
import { Board } from '../model/types'


interface Props {
    board: Board

}
export const BoardListItem = ({ board }: Props) => {
    return (
        <li className='mb-3 mx-2'>
            <Icon icon={board.icon} className='w-12 h-12 rounded-full inline mr-3' />
            {board.name}
        </li>
    )
}
