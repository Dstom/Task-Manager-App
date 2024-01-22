"use client"
import { PlusIcon } from "@heroicons/react/20/solid"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { useState } from "react"

export const NewCard = () => {
    const [isOpenNewCard, setIsOpenNewCard] = useState(false)

    function closeNewCard() {
        setIsOpenNewCard(false)
    }

    function openNewCard() {
        setIsOpenNewCard(true)
    }

    const AddNewCard = () => {
        return <div className="mx-2">
            <textarea
                placeholder="Write a title for a task card..."
                className="text-sm p-2 resize-none w-full rounded-md focus-visible:outline-none"></textarea>
            <div className="flex items-center">
                <button className="mr-2 px-3 py-1.5 bg-blue-500 hover:bg-blue-700 text-white dark:text-zinc-800 dar:bg-blue-500 dark:hover:bg-blue-400 rounded transition delay-75 text-sm" onClick={() => closeNewCard()}>Add Task Card</button>
                <button
                    onClick={closeNewCard}
                    className="hover:bg-zinc-200 hover:opacity-50 p-1.5 rounded">
                    <XMarkIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    }
    return (
        isOpenNewCard ?
            <AddNewCard /> :

            <div
                onClick={() => openNewCard()}
                className='mx-2 bg-slate-100 z-[1] sticky bottom-0 py-1 px-3 rounded-md flex items-center text-sm hover:bg-zinc-300 hover:cursor-pointer transition ease-in duration-75'>
                <PlusIcon className='h-4 w-4 dark:text-white inline' />
                Add new task card
            </div>


    )
}
