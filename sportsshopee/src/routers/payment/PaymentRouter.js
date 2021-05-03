import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from '../../components/payment/DashBoard';
import AddPayment from "../../components/payment/AddPayment";
import UpdatePayment from "../../components/payment/UpdatePayment";
import Payment from '../../components/payment/Payment';

const PaymentRouter = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path={`/payment`} component={DashBoard}/>
                 <Route path={`/addPayment`} component={AddPayment} />
                 <Route path={`/updatePayment/:paymentId`} component={UpdatePayment} />
                 <Route path={`/getPaymentById/:paymentId`} component={Payment} />
             </Switch>
         </div>
    </BrowserRouter>
);

export default PaymentRouter;