import {ActionType} from './ActionType'

export const getPayments = (payments) =>{
    return {
        type: ActionType.GET_PAYMENTS ,
        payload: payments
    }
}

export const getPaymentById = (payment) =>{
    return {
        type: ActionType.GET_PAYMENT_ID ,
        payload: payment
    }
}

export const removeGetPaymentById = () => {
    return {
        type: ActionType.REMOVE_GET_PAYMENT_ID
    }
}