import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddPayment from '../../components/payment/AddPayment';

const PaymentRouter = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path="/" component={AddPayment}/>
             </Switch>
         </div>
    </BrowserRouter>
);

export default PaymentRouter;