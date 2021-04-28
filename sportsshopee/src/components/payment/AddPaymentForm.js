import React from 'react';
import Button from '@material-ui/core/Button';


export default class AddPaymentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: {
                type: "",
                status: "",
                cardName: "",
                cardNumber: "",
                cardExpiry: "",
                cvv: "",
                error=""
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
        this.sertState({ cardExpiry: e.target.value });
    }

    onCvvChange = (e) => {
        this.setState({ cvv: e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.type || !this.state.status || !this.state.cardName || !this.state.cardNumber || !this.state.cadExpiry || !this.state.cvv) {
            this.setState(() => ({ error: "Please Enter Payment Details" }));
        }
        else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitPayment()(
                {
                    type: this.state.type,
                    status: this.state.status,
                    cardName: this.state.cardName,
                    cardNumber: this.state.cardNumber,
                    cardExpiry: this.state.cadExpiry,
                    cvv: this.state.cvv
                }
            )
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className=''>
                    <input type="type" placeholder="Payment Type" autoFocus
                        value={this.state.title}
                        onChange={this.onTypeChange} />
                    <br />

                    <input type="text" placeholder="author"
                        value={this.state.author}
                        onChange={this.onAuthorChange} />
                    <br />

                    <textarea placeholder="description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange} />
                    <br />

                    <input type="number" placeholder="published"
                        value={this.state.published}
                        onChange={this.onPublishedChange} />
                    <br />
                    <Button>Add Book</Button>
                </form>
            </div>
        )
    }

}