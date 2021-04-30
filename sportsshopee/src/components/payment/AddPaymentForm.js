import React from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { addPayment } from '../../actions/payment/PaymentAction';
import  store  from '../../store/store';

export default class AddPaymentForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            payment: {
                type: "",
                status: ""
            },
            card: {
                cardName: "",
                cardNumber: '',
                cardExpiry: "",
                cvv: '',
            }
        }
    }
   

    onTypeChange = (e) => {
        this.setState(state => ({ payment: { ...state.payment, type: e.target.value }, }));
    }

    onStatusChange = (e) => {
        this.setState(state => ({ payment: { ...state.payment, status: e.target.value }, }));
    }

    onCardNameChange = (e) => {
        this.setState(state => ({ card: { ...state.card, cardName: e.target.value }, }));
    }

    onCardNumberChange = (e) => {
        this.setState(state => ({ card: { ...state.card, cardNumber: e.target.value }, }));
    }

    onCardExpiryChange = (e) => {
        this.setState(state => ({ card: { ...state.card, cardExpiry: e.target.value }, }));
    }

    onCvvChange = (e) => {
        this.setState(state => ({ card: { ...state.card, cvv: e.target.value }, }));
    }

    onCancel = () => {
        //this.props.handleCancel(); 
        this.props.history.push('/');
    }

    onSubmit = (e) => {

        e.preventDefault();
        console.log("Submitted");
        console.log(this.state);
        store().dispatch(addPayment(this.state));
    }



render() {
    return (
        <Container >
            <div  >

                <form onSubmit={this.onSubmit} >
                    <div>
                        <Box color="primary.main"> <h2>Payment Details :</h2></Box>
                    </div>
                    <br />
                    <FormControl fullWidth>
                        <FormLabel component="legend">Payment Type</FormLabel>
                        <RadioGroup required aria-label="Payment Status" name="Payment Type" value={this.state.payment.type} onChange={this.onTypeChange}>
                            <FormControlLabel value="Credit" control={<Radio required={true} />} label="Credit" />
                            <FormControlLabel value="Debit" control={<Radio required={true} />} label="Debit" />
                        </RadioGroup>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl fullWidth>
                        <FormLabel component="legend">Payment Status</FormLabel>
                        <RadioGroup required aria-label="Payment Status" name="Payment Status" value={this.state.payment.status} onChange={this.onStatusChange}>
                            <FormControlLabel value="Success" control={<Radio required={true} />} label="Success" />
                            <FormControlLabel value="Pending" control={<Radio required={true} />} label="Pending" />
                        </RadioGroup>
                    </FormControl>
                    <br />
                    <br />
                    <div>
                        <Box color="primary.main"> <h2>Card Details :</h2></Box>
                    </div>
                    <FormControl fullWidth >
                        <TextField
                            required id="standard-textarea" label="Card Name" placeholder="Enter Card Name"
                            value={this.state.card.cardName} onChange={this.onCardNameChange} />
                    </FormControl>
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Card Number" type="number"
                            value={this.state.card.cardNumber} onChange={this.onCardNumberChange}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl fullWidth>
                        <TextField
                            required id="date"
                            label="Card Expiry"
                            type="date"
                            defaultValue="2021-04-29"
                            className={useStyles.textField}
                            value={this.state.card.cardExpiry}
                            onChange={this.onCardExpiryChange}
                            InputLabelProps={{
                                shrink: true
                            }} />
                            
                    </FormControl>
                    <br />
                    <br />

                    <FormControl fullWidth>
                        <TextField
                            required id="standard-number" label="Cvv" type="number"
                            value={this.state.card.cvv} onChange={this.onCvvChange}
                            InputLabelProps={{
                                shrink: true
                            }} />
                    </FormControl >
                    <br />
                    <br />
                    {this.state.error && <b style={errorStyle}>{this.state.error}</b>}
                    <br />
                    <br />

                    <Button style={style} type="submit">Add Payment & Card </Button>
                    <Button style={style} onChange={this.onCancel}> Cancel</Button>
                </form>
            </div>
        </Container>
    )
}

}

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const style = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    marginLeft: "10px",
};

const errorStyle = {
    color: 'red'
};


