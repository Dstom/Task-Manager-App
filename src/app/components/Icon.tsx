import React from 'react'
interface Props {
    icon: IconTypes,
    className?: string
}

export const Icon = ({ icon, className }: Props) => {
    return (
        <img
            src={iconRegistry[icon]}
            className={`${className}`} />
    )
}

export type IconTypes = keyof typeof iconRegistry

export const iconRegistry = {
    brainstorm: "icons/Brainstorm.png",
    calendar: "icons/Calendar.png",
    clipboard: "icons/ClipBoard.png",
    manager: "icons/Manager.png",
    profits: "icons/Profits.png",
    shoppingcart: "icons/ShoppingCart.png",
    startup: "icons/Startup.png",
    tasks: "icons/Tasks.png",
    team: "icons/Team.png",
    trophy: "icons/Torphy.png",
}