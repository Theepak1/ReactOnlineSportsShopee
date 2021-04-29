import { connect } from "react-redux";
import AddPaymentForm from "./AddPaymentForm";


const AddPayment = (props) => (
    <div>
        <h3>Add Payment Imformation</h3>
        <AddPaymentForm 
             onSubmitPayment={(payment) => {
                 props.dispatch();
                 props.history.push('/');
             }} />
        
    </div>
);

export default connect()(AddPayment);