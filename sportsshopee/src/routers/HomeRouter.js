import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../components/HomePage';
import PaymentDashBoard from '../components/payment/PaymentDashBoard';
import AddPayment from '../components/payment/AddPayment';
import UpdatePayment from '../components/payment/UpdatePayment';
import Payment from '../components/payment/Payment';
import LoginPage from '../components/LoginPage';

const HomeRouter = () => (
    <BrowserRouter>
         <div>
             <Switch>
                 <Route path="/" component={LoginPage} exact/>
                 <Route path={`/homepage`} component={HomePage}/> 
                 <Route path={`/payment`} component={PaymentDashBoard}/>
                 <Route path={`/addPayment`} component={AddPayment} />
                 <Route path={`/updatePayment/:paymentId`} component={UpdatePayment} />
                 <Route path={`/getPaymentById/:paymentId`} component={Payment} />         
             </Switch>
         </div>
    </BrowserRouter>
);

export default HomeRouter;