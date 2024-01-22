import { IconTypes } from "../components/Icon"

export type Board = {
    id: string,
    name: string,
    owner: string,
    icon: IconTypes
}

export type Cardlist = {
    id: string,
    name: string,
    cards: Card[],
    ownerId: string
}

export type Card = {
    id: string,
    image?: string,
    title: string,
    cardListId: string,
    tags: Tag[]
}

export type Tag = {
    id: string,
    cardId: string,
    name: string,
    background: string
}
export type User = {
    id: string,
    email: string,
    password: string,
    name?: string
}

export type TagTypes = keyof typeof tagsRegistry

export const tagsRegistry = {
    concept: "concept",
    technical: "technical",
    frontend: "front-end",
    backend: "back-end",
}