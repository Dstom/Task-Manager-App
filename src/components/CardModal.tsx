"use client"
import { Dialog, Transition } from '@headlessui/react'
import { Bars3BottomLeftIcon, PaperClipIcon, PlusIcon, TagIcon } from '@heroicons/react/24/outline';
import React, { Fragment, useState } from 'react'
import { LogoRadioGroup } from './LogoRadioGroup'
import { WindowIcon } from '@heroicons/react/20/solid';
import { NewLabelPopUp } from './NewLabelPopUp';

type Props = {
    isOpen: boolean;
    setIsOpen: Function;
}

export const CardModal = ({ isOpen, setIsOpen }: Props) => {
    const [isTagModalOpen, setIsTagModalOpen] = useState(false)

    const LabelButton = () => {
        return (
            <>
                <TagIcon className='w-3 h-3 inline mr-2' />Tags
            </>
        )
    }
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-2xl min-h-[400px] transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 px-7"
                                    >
                                        <WindowIcon className='w-6 h-6 absolute block left-6' />
                                        <span className='text-lg font-bold'>Task name</span>
                                        <span className='text-xs block'>
                                            en la lista de <u>proceso</u>
                                        </span>
                                    </Dialog.Title>
                                    <div className="gap-4 mt-2 grid grid-cols-[3fr_1fr]">
                                        <div>
                                            <div className='ml-7 mb-2'>
                                                <h3 className='text-xs font-bold'>Tags</h3>
                                                <div className='flex'>
                                                    <span className='w-12 h-8 bg-red-800 rounded-sm'></span>
                                                </div>
                                            </div>

                                            <div className=''>
                                                <div className='flex gap-1'>
                                                    <Bars3BottomLeftIcon className='w-6 h-6' /> <h3 className='font-bold text-lg'>Description</h3>
                                                </div>
                                                <p className='cursor-pointer min-h-10 ml-7 text-sm bg-zinc-100 px-3 py-2'>Add a more detailed description...</p>
                                            </div>

                                        </div>
                                        <div className=''>
                                            <h3 className='text-xs font-bold'>Add to card</h3>
                                            <ul className='flex flex-col gap-2'>
                                                <NewLabelPopUp className={'w-full text-left focus-visible:outline-none text-sm bg-zinc-100 py-1.5 px-3 rounded hover:cursor-pointer hover:bg-zinc-200'}
                                                    elementType={'li'} children={<LabelButton />} />
                                                <li className='text-sm bg-zinc-100 py-1.5 px-3 rounded hover:cursor-pointer hover:bg-zinc-200'><PaperClipIcon className='w-3 h-3 inline mr-2' /> Attachment</li>
                                            </ul>

                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
