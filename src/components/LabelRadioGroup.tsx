"use client"
import { Dispatch, SetStateAction, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { arrayIcons, iconRegistry, IconTypes } from './Icon'
import { tagColors } from '@/model/TagColors'

type Props = {
    idLabelColor: number,
    setLabelColor: Dispatch<SetStateAction<number>>,
}

export const LabelRadioGroup = ({ idLabelColor, setLabelColor }: Props) => {

    const getClassNameOnChecked = (checked: boolean) => {
        return checked ? 'border-blue-600' : ''
    }
    return (
        <RadioGroup value={idLabelColor} onChange={setLabelColor}>
            <RadioGroup.Label className="text-gray-700 text-sm font-bold mb-2">Logo</RadioGroup.Label>
            <div className="grid gap-1 grid-cols-5 grid-flow-col grid-rows-6 mb-2">
                {
                    tagColors.map(x => (
                        <RadioGroup.Option
                            key={x.id}
                            className="hover:cursor-pointer"
                            value={x.id}>
                            {({ checked }) => (
                                <div
                                    className={`border-2 rounded w-full h-8 ${x.light} dark:${x.dark} ${getClassNameOnChecked(checked)}`}
                                >
                                </div>
                            )}
                        </RadioGroup.Option>
                    ))
                }
            </div>
        </RadioGroup >
    )
}

