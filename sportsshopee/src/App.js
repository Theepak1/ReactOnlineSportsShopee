import { Provider } from 'react-redux';
import store from './store/store'
import PaymentRouter from './routers/payment/PaymentRouter'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

    return (
        <div>
            <Provider store={store()}>
                <PaymentRouter />
            </Provider>
        </div>

    );


}

export default App;