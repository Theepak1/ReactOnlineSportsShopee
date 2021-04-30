import AddPaymentForm from "./components/payment/AddPaymentForm";
import { Provider } from 'react-redux';
import paymentStore from './store/store'

function App() {

    return (
        <div>
            <Provider store={paymentStore()}>
                <AddPaymentForm  />
            </Provider>
        </div>
    );


}

export default App;