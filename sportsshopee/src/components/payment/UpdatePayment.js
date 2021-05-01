import React from 'react';
import { updatePayment } from '../../actions/payment/PaymentAction';
import UpdatePaymentForm from './UpdatePaymentForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';

const UpdatePayment = (props) => (
    <div>
        <Box color="primary.main"> <h2>Update Payment</h2></Box>
        <UpdatePaymentForm 
            onSubmitPayment = {(payment) => {
                props.dispatch(updatePayment(payment.paymentId,payment));
                props.history.push('/');
            }}
        /> 
    </div>
)

const mapStateToProps = (state,props) => {
    return {
        payment: state.find((paymentId) => 
        paymentId === props.paymentId
        )
    };
};

export default connect(mapStateToProps)(UpdatePayment);