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
        const result =  axios.post('/addPayment', payment);
        dispatch(_addPayment(result.data));
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
        });
    };
};

const _updatePayment = (updatedPayment) => ({
    type:"UPDATE_PAYMENT",
    updatedPayment
});

export const updatePayment = (updatedPayment) => {
    return (dispatch) => {
        return axios.put(`/updatePayment`,updatedPayment).then(() => {
            dispatch(_updatePayment(updatedPayment));
        });
    };
};

const _getPayments = (payments) => ({
    type : 'GET_PAYMENTS',
    payments
});

export const getPayments = () => {
    return (dispatch) => {
        return axios.get('/getAllPayment').then(result => {
            const payments = [];
            result.data.forEach(items => {
                payments.push(items);
            });
            dispatch(_getPayments(payments));
        });
    };
};