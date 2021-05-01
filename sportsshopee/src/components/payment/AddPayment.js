import React from 'react';
import { connect } from "react-redux";
import { addPayment } from '../../actions/payment/PaymentAction';
import AddPaymentForm from "./AddPaymentForm";
import Box from '@material-ui/core/Box';


const AddPayment = (props) => (
    <div>
         <Box color="primary.main"> <h2>Add Payment</h2></Box>
        <AddPaymentForm 
             handleCancel={()=>{props.history.push('/');}}
             onSubmitPayment={(state) => {
                 props.dispatch(addPayment(state));
                 props.history.push('/');
             }} />
        
    </div>
);

export default connect()(AddPayment);