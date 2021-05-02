import { combineReducers } from "redux";
import  paymentReducer  from "./payment/paymentReducer";
import { getPaymentReducer,getPaymentsReducer } from "./payment/PaymentReducerType";

const rootReducer = combineReducers({
    paymentReducer,
    allPayments:getPaymentsReducer,
    payment:getPaymentReducer,
});

export default rootReducer;