import React from 'react'
import { BoardListItem } from './BoardListItem'
import { Board } from '../model/types'

interface Props {
    boardList: Board[]
}

export const BoardList = ({ boardList }: Props) => {
    return (
        <ul>
            {
                boardList.map(x => (
                    <BoardListItem board={x} />
                ))
            }
        </ul>
    )
}
