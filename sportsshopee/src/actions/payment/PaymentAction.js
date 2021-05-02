import axios from "../../axios/axios";


const _addPayment = (payment) => ({
    type: 'ADD_PAYMENT',
    payment
});

export const addPayment = (paymentData = {
    type: '',
    status: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cvv: ''
    
}) => {
    return (dispatch) => {
        const payment = {
            type: paymentData.type,
            status: paymentData.status,
            card:
            {
            cardName: paymentData.cardName,
            cardNumber: paymentData.cardNumber,
            cardExpiry: paymentData.cardExpiry,
            cvv: paymentData.cvv
            }
        };
        console.log(payment);
        return axios.post('/addPayment', payment).then(() => {
            dispatch(_addPayment(payment));
        }).catch(error => {
            throw (error);
        });
    };
};

const _removePayment = ({paymentId} = {}) => ({
    type: 'REMOVE_PAYMENT',
    paymentId
});

export const removePayment = ({paymentId} = {}) => {
    return (dispatch) =>  {
        return axios.delete(`/removePayment/${paymentId}`).then(() => {
            dispatch(_removePayment({paymentId}));
        }).catch(error => {
            throw (error);
        });
    };
};

const _updatePayment = (paymentId,updatedPayment) => ({
    type:"UPDATE_PAYMENT",
    paymentId,
    updatedPayment
});


export const updatePayment = (paymentId,updatedPayment = {
    paymentId: "",
    type: '',
    status: '',
    id: "",
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cvv: ''
}) => {
    return (dispatch) => {
        const payment = {
            paymentId:paymentId,
            type: updatedPayment.type,
            status : updatedPayment.status,
            card:{
                id:updatedPayment.id,
                cardName:updatedPayment.cardName,
                cardNumber:updatedPayment.cardNumber,
                cardExpiry:updatedPayment.cardExpiry,
                cvv:updatedPayment.cvv
            }
        };
        console.log(payment);
        return axios.put(`/updatePayment/${paymentId}`,payment).then(() => {
            dispatch(_updatePayment(paymentId,payment));
        }).catch(error => {
            throw (error);
        });
    }
};

const _getPayments = (payments) => ({
    type : 'GET_PAYMENTS',
    payments
});

export const getPayments = () => {
    return (dispatch) => {
        return axios.get('/getAllPayment').then(payments => {
            dispatch(_getPayments(payments));
        }).catch(error => {
            throw (error);
        });
    };
};

const _getPaymentById = (payment) => ({
    type : 'GET_PAYMENT',
    payment
})

export const getPayment = (paymentId) => {
    return (dispatch) => {
        return axios.get(`/getPaymentById/${paymentId}`).then(result => {
            dispatch(_getPaymentById(result.data))
        }).catch(error => {
            throw (error);
        })
    }
}