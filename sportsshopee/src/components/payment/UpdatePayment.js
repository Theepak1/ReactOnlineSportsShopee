import React from 'react';
import { updatePayment } from '../../actions/payment/PaymentAction';
import UpdatePaymentForm from './UpdatePaymentForm';
import { connect } from 'react-redux';

const UpdatePayment = (props) => (
    <div>
        <h2>Update PAyment Details</h2>
        <UpdatePaymentForm 
            onSubmitPayment = {(payment) => {
                props.dispatch(updatePayment(payment));
                props.history.push('/');
            }}
        /> 
    </div>
)

const mapStateToProps = (state,props) => {
    return {
        payment: state.find((payment) => 
        payment.id=== props.match.params.id
        )
    };
};

export default connect(mapStateToProps)(UpdatePayment);