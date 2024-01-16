import React from 'react'
import { Card } from '../model/types'
import { hexToRgb } from '../utilities/utilites'

type Props = {
    myCard: Card
}

export const CardItem = ({ myCard }: Props) => {

    const getTextColor = (backgroundColor: string) => {

        let translated = hexToRgb(backgroundColor);
        let targetColor = `rgb(${translated?.r},${translated?.g},${translated?.b})`;
        let colors = targetColor.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        let brightness = 1;

        let R = colors![1];
        let G = colors![2];
        let B = colors![3];

        let ir = Math.floor((255 - Number(R)) * brightness);
        let ig = Math.floor((255 - Number(G)) * brightness);
        let ib = Math.floor((255 - Number(B)) * brightness);

        return `rgb(${ir}, ${ig}, ${ib})`;
    }
    return (
        <div className='bg-primary-light dark:bg-primary-dark rounded-xl p-2'>
            {
                myCard.image && <img src={myCard.image} />
            }
            <p>{myCard.title}</p>
            <ul className='flex gap-1'>
                {
                    myCard.tags.map(tag => (

                        <li key={`${tag.cardId}-${tag.id}`}>
                            <span
                                style={{ color: getTextColor(tag.background), backgroundColor: tag.background }}
                                className='min-w-14 w-full inline-block text-xs px-0.5 max-w-full rounded-sm align-middle'>{tag.name}</span>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
