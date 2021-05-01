const paymentReducerDefaultState = [];

const paymentReducer =  (state = paymentReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PAYMENT':
            return [
                ...state,
                action.payment
            ];
        case 'REMOVE_PAYMENT':
            return state.filter(({paymentId}) => paymentId !== action.paymentId);
        case 'UPDATE_PAYMENT':
            return state.map((payment) => {
                if (payment.paymentId === action.paymentId){
                    return {
                        ...payment,
                        ...action.payment
                    };
                }else {
                    return payment;
                }
            });
        case 'GET_PAYMENTS':
            return action.payment;
        default:
            return state;
    }
}

export default paymentReducer;