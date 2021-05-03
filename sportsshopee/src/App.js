import { Provider } from 'react-redux';
import store from './store/store'
import CustomerRouter from './routers/customer/CustomerRouter'


function App() {

    return (
        <div>
            <Provider store={store()}>
               <CustomerRouter />

            </Provider>
        </div>

    );


}

export default App;