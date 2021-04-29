import React from 'react';
import Button from '@material-ui/core/Button';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

export default class UpdatePaymentForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            payment: {
                type: "",
                status: "",
                card: {
                    cardName: "",
                    cardNumber: "",
                    cardExpiry: "",
                    cvv: "",
                },
                error: ""
            }

        }
    }

    onTypeChange = (e) => {
        this.setState({ type: e.target.value });
    }

    onStatusChange = (e) => {
        this.setState({ state: e.target.value });
    }

    onCardNameChange = (e) => {
        this.setState({ cardName: e.target.value });
    }

    onCardNumberChange = (e) => {
        this.setState({ cardNumber: e.target.value });
    }

    onCardExpiryChange = (e) => {
        this.setState({ cardExpiry: e.target.value });
    }

    onCvvChange = (e) => {
        this.setState({ cvv: e.target.value });
    }

    onCancel = () => {
        //this.props.handleCancel(); 
        this.props.history.push('/');
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.type || !this.state.status || !this.state.cardName || !this.state.cardNumber || !this.state.cadExpiry || !this.state.cvv) {
            this.setState(() => ({ error: "Please Enter Payment and Details" }));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitPayment()(
                {
                    type: this.state.type,
                    status: this.state.status,
                    cardName: this.state.card.cardName,
                    cardNumber: this.state.card.cardNumber,
                    cardExpiry: this.state.card.cadExpiry,
                    cvv: this.state.card.cvv
                }
            )
        }
    }

    render() {
        return (
            <Container >
                <div  >

                    <form onSubmit={this.onSubmit}  >
                        <div>
                        <Box color="primary.main"> <h2>Payment Details :</h2></Box>
                       </div>
                       <br />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-required-label">Payment Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={this.state.type}
                                onChange={this.onTypeChange}
                            >
                                <MenuItem value="Debit">Debit</MenuItem>
                                <MenuItem value="Credit">Credit</MenuItem>
                            </Select>
                        </FormControl>
                        <br />
                        <br />
                        <FormControl fullWidth>
                            <FormLabel component="legend">Payment Status</FormLabel>
                            <RadioGroup aria-label="Payment Status" name="Payment Status" value={this.state.status} onChange={this.onStatusChange}>
                                <FormControlLabel value="Success" control={<Radio />} label="Success" />
                                <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <br />
                        <div>
                        <Box color="primary.main"> <h2>Card Details :</h2></Box>
                        </div>
                        <FormControl fullWidth>
                            <TextField
                                required id="standard-textarea" label="Card Name" placeholder="Enter Card Name"
                                value={this.state.cardName} onChange={this.onCardNameChange} />
                        </FormControl>
                        <br />
                        <br />

                        <FormControl fullWidth>
                            <TextField
                                required id="standard-number" label="Card Number" type="number"
                                value={this.state.cardNumber} onChange={this.onCardNumberChange}
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
                                value={this.state.cardExpiry}
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
                                value={this.state.cvv} onChange={this.onCvvChange}
                                InputLabelProps={{
                                    shrink: true
                                }} />
                        </FormControl >
                        <br />
                        <br />
                        {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                        <Button style={style}>Update Payment & Card </Button>
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
