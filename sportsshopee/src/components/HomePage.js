
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {  useHistory } from 'react-router-dom';



function HomePage(){
    const history = useHistory();
    return(
        <div>
            <Header/>
            <div>
                Home Page Details
                <h1>Login </h1>
                <h1>Sign up</h1>

                <p> <center><button variant="default" class="btn btn-warning"  onClick={()=> history.push("/payment")}>
       Payment</button></center>
       </p>
                
                <h1>Product</h1>
                <h1>Customer</h1>
                <h1>Order</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;