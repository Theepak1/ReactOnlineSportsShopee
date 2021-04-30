import payment from "../reducers/payment/payment";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

const paymentStore =  () => {
    return createStore(payment , applyMiddleware(thunk));
}
export default paymentStore;