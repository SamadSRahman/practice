import {atom} from 'recoil'

export const atomData = atom({
    key: 'userData',
    default: []
})
export const atomName = atom({
    key: 'atomName',
    default:''
})
export const atomAge = atom({
    key: 'atomAge',
    default:''
})
export const atomEmail = atom({
    key: 'atomEmail',
    default:''
})
export const atomCity = atom({
    key: 'atomCity',
    default:''
})