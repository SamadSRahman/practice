import { atom } from "recoil";

export const billDetails = atom({
    key: 'billDetails',
    default: []

})

export const atomName = atom({
    key: 'atomName',
    default:''
})
export const atomGrandTotal = atom({
    key: 'atomGrandTotal',
    default:0
})

export const isVisible = atom({
    key: 'isVisible',
    default:false
})
