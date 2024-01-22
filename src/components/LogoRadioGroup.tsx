"use client"
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { arrayIcons, iconRegistry, IconTypes } from './Icon'

export const LogoRadioGroup = () => {
    let [plan, setPlan] = useState('brainstorm')

    const getClassNameOnChecked = (checked: boolean) => {
        return checked ? 'border-blue-600' : ''
    }
    return (
        <RadioGroup value={plan} onChange={setPlan}>
            <RadioGroup.Label className="text-gray-700 text-sm font-bold mb-2">Logo</RadioGroup.Label>
            <div className='flex flex-wrap gap-2'>
                {
                    arrayIcons.map((icon) => (
                        <RadioGroup.Option
                            key={icon}
                            className="hover:cursor-pointer"
                            value={icon}>
                            {({ checked }) => (
                                <img
                                    src={iconRegistry[icon as keyof typeof iconRegistry]}
                                    className={`h-10 w-10 rounded-full border-2 border-solid ${getClassNameOnChecked(checked)}`} />

                            )}
                        </RadioGroup.Option>
                    ))
                }
            </div>


        </RadioGroup>
    )
}