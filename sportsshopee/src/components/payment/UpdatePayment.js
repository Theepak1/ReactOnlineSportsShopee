import React from 'react';
import { updatePayment } from '../../actions/payment/PaymentAction';
import UpdatePaymentForm from './UpdatePaymentForm';
import { connect } from 'react-redux';
import Box from '@material-ui/core/Box';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const UpdatePayment = (props) => (
    <div className={useStyles.root}>
        <Box color="white" bgcolor="palevioletred" p={1}> <h2>Update Payment</h2></Box>
        <Paper elevation={3} >
        <UpdatePaymentForm 
            onSubmitPayment = {(payment) => {
                props.dispatch(updatePayment(payment.paymentId,payment));
                props.history.push('/payment');
            }}
        /> 
        </Paper>
    </div>
)

const mapStateToProps = state => ({
    payment : state.payment
});

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
  }));

export default connect(mapStateToProps)(UpdatePayment);