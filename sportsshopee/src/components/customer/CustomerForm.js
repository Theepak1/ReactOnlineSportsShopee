import React from 'react';
import Button from '@material-ui/core/Button';
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
import { FormControl, TextField } from '@material-ui/core';

export default class CustomerForm extends React.Component {

    constructor(props) 
    {
        super(props);
        this.state = 
        {
            name : "",
            email: "",
            contactNo: "",
            dob: "",
            address:
            {
                doorNo: "",
                street: "",
                area: "",
                city: "",
                state: "",
                pinCode: "",
            }      

        }
    }

    onCustomerNameChange = (e) => {
        this.setState({ name: e.target.value });
    }

    onEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    onContactNoChange = (e) => {
        this.setState({ contactNo: e.target.value });
    }

    onDobChange = (e) => {
        this.setState({ dob: e.target.value });
    }

   

    onDoorNoChange = (e) => {
        this.setState(state => ({ address: { ...state.address, doorNo: e.target.value }, }));
    }

    onStreetChange = (e) => {
        this.setState(state => ({ address: { ...state.address, street: e.target.value }, }));
    }

    onAreaChange = (e) => {
        this.setState(state => ({ address: { ...state.address, area: e.target.value }, }));
    }

    onCityChange = (e) => {
        this.setState(state => ({ address: { ...state.address, city: e.target.value }, }));
    }

    onStateChange = (e) => {
        this.setState(state => ({ address: { ...state.address, state: e.target.value }, }));
    }

    onPinCodeChange = (e) => {
        this.setState(state => ({ address: { ...state.address, pinCode: e.target.value }, }));
    }

    onCancel = () => {
        //this.props.handleCancel(); 
        this.props.history.push('/customer');
    }

    onSubmit = (e) => 
    {
        e.preventDefault();
        console.log("Submitted");
        alert(this.state);
        console.log(this.state);
        this.props.onSubmitCustomer
        (
            {
                name: this.state.name,
                email: this.state.email,
                contactNo: this.state.contactNo,
                dob: this.state.dob,
                doorNo: this.state.address.doorNo,
                street: this.state.address.street,
                area: this.state.address.area,
                city: this.state.address.city,
                state: this.state.address.state,
                pinCode: this.state.address.pinCode,
            }
        );
        
    }

    render() {
        return (
            <Container>
           
                <form onSubmit={this.onSubmit} >

                    <div>
                        <Box color="primary.main"> <h2> CUSTOMER DETAILS :</h2></Box>
                    </div>
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Customer Name" placeholder="Enter Customer Name"
                        value={this.state.name} onChange={this.onCustomerNameChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                        required id="standard-number" label="Email ID" 
                        value={this.state.email} onChange={this.onEmailChange} />  
                        </FormControl>
                        <br />

                    <FormControl fullWidth>
                    <TextField
                        required id="standard-number" label="Contact Number" type="number"
                        value={this.state.contactNo} onChange={this.onContactNoChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Date of Birth" placeholder="DD/MM/YYYY"
                        value={this.state.dob} onChange={this.onDobChange} />
                        </FormControl>
                    <br />

                    <div>
                        <Box color="primary.main"> <h2> ADDRESS DETAILS :</h2></Box>
                    </div>
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Door Number" 
                        value={this.state.address.doorNo} onChange={this.onDoorNoChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Street" 
                        value={this.state.address.street} onChange={this.onStreetChange} />
                        </FormControl>
                    <br />

                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="Area" 
                        value={this.state.address.area} onChange={this.onAreaChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="City" 
                        value={this.state.address.city} onChange={this.onCityChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="State" 
                        value={this.state.address.state} onChange={this.onStateChange} />
                        </FormControl>
                    <br />
                    
                    <FormControl fullWidth>
                    <TextField
                         required id="standard-textarea" label="pinCode" type="number" 
                        value={this.state.address.pinCode} onChange={this.onPinCodeChange} />
                        </FormControl>
                    <br />
                    <p> 
                         </p>
    
                    {this.state.error && <b className="m-1 text-danger">{this.state.error}</b>}

                    <Button style={style} type="submit">Add Customer</Button>
                    <Button style={style} onChange={this.onCancel}> Cancel</Button>

                </form>
           
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