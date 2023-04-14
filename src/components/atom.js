import { atom } from "recoil";

export const notesList = atom({
    key: 'notesList',
    default: [],
})

export const atomIsVisible = atom({
    key: 'atomIsVisible',
    default: false,
})