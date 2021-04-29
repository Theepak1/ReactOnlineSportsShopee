import payment from "../reducers/payment/payment";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";


export default () => {
    return createStore(payment , applyMiddleware(thunk));
}