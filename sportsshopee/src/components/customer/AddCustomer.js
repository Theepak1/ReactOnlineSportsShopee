import React from 'react';
import { connect } from "react-redux";
import { addCustomer } from '../../actions/customer/CustomerAction';
import CustomerForm from "./CustomerForm";


const AddCustomer = (props) => (
    <div>
        <h3>Add Customer Imformation</h3>
        <CustomerForm 
             onSubmitCustomer={(state) => {
                 props.dispatch(addCustomer(state));
                 props.history.push('/');
             }} />
        
    </div>
);

export default connect()(AddCustomer);