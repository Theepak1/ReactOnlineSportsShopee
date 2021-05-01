import React from 'react';
import { connect } from 'react-redux';
import Payment from './Payment';

const PaymentList = (props) => (
    <div>
        Payment Details:
        <ul>
            {props.payments.map(payment => {
                return (
                    <li key={payment.paymentId}>
                        <Payment {...payment} />
                    </li>
                );
            })}
        </ul> 
    </div>
);

const mapStateToProps = (state) => {
    return {
        payments : state
    };
}

export default connect(mapStateToProps)(PaymentList);