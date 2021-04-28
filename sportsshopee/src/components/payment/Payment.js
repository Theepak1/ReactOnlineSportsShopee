import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

const Payment = ({paymentId, type, status, id, cardName, cardNumber, cardExpiry, cvv}) => (
    <div>
        <Link to={`/getPaymentById/${paymentId}`}>{paymentId}</Link>
        <p>
            Id               : {paymentId}<br/>
            Type             : {type}<br/>
            Status           : {status}<br/>
            Card Id          : {id}<br/>
            Card Name        : {cardName}<br/>
            Card Number      : {cardNumber}<br/>
            Card Expiry Date : {cardExpiry}<br/>
            CCV              : {cvv}<br/>
        </p>
        <Button variant="contained" color="secondary" onClick={() => {
            dispatch();
        } }>
            Remove
        </Button>
    </div>
);

export default connect()(Payment);