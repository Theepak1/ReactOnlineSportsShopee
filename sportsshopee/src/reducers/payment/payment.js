const paymentReducerDefaultState = [];

export default (state = paymentReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_PAYMENT':
            return [
                ...state,
                action.book
            ];
        case 'REMOVE_PAYMENT':
            return state.filter(({id}) => id !== action.id);
        case 'UPDATE_PAYMENT':
            return state.map((payment) => {
                if (payment.id === action.id){
                    return {
                        ...payment,
                        ...action.updates
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
};