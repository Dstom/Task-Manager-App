import React from 'react'
import { BoardList } from './BoardList'
import { Board } from '../model/types'
import { MoonIcon, PlusCircleIcon, PlusIcon, SunIcon } from '@heroicons/react/20/solid'

const boardList: Board[] = [
    { id: "1", name: "Design Board", owner: "user", icon: 'brainstorm' },
    { id: "2", name: "Learning Board", owner: "user", icon: 'team' },
    { id: "3", name: "English Board", owner: "user", icon: 'manager' },
]

export const Sidebar = () => {
    return (
        <div className='sidebar flex flex-col justify-between'>
            <div>
                <BoardList boardList={boardList} />
                <div className='flex gap-3 font-semibold hover:cursor-pointer mx-2'>
                    <PlusCircleIcon className='h-6 w-6 dark:text-white' />
                    <span>Add new board</span>
                </div>
            </div>


            <div className='flex bg-secondary-light dark:bg-secondary-dark rounded-xl m-2 p-1'>
                <div className='bg-primary-light dark:bg-primary-dark rounded-xl px-7 py-2'>
                    <MoonIcon className='h-6 w-6 dark:text-white inline' />
                    Dark
                </div>
                <div className='bg-secondary-light dark:bg-secondary-dark rounded-xl px-7 py-2'>
                    <SunIcon className='h-6 w-6 dark:text-white inline' />
                    Light
                </div>
            </div>
        </div>
    )
}
