import React from 'react';
import { connect } from "react-redux";
import { addPayment } from '../../actions/payment/PaymentAction';
import AddPaymentForm from "./AddPaymentForm";


const AddPayment = (props) => (
    <div>
        <h3>Add Payment Imformation</h3>
        <AddPaymentForm 
             onSubmitPayment={(state) => {
                 props.dispatch(addPayment(state));
                 props.history.push('/');
             }} />
        
    </div>
);

export default connect()(AddPayment);