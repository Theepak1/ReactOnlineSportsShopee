import { ActionType } from "../../actions/payment/ActionType";

const initialState ={
    payments:[]
};

export const getPaymentsReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case ActionType.GET_PAYMENTS:
            return {...state,payments:payload}
            
    
        default:
            return state;
            
    }
};

export const getPaymentReducer = (state = {} ,{type,payload}) => {
    switch (type) {
        case ActionType.GET_PAYMENT_ID:
            return {...state,...payload}
            

        case ActionType.REMOVE_GET_PAYMENT_ID:
            return{}
            
    
        default:
            return state;
    }
}