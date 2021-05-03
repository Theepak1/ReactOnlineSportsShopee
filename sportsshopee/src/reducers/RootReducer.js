import { combineReducers } from "redux";
import  customerReducer  from "./customer/CustomerReducer";
import { getCustomerReducer,getCustomersReducer } from "./customer/CustomerReducerType";

const rootReducer = combineReducers({
    customerReducer,
    allCustomers:getCustomersReducer,
    customer:getCustomerReducer,
});

export default rootReducer;