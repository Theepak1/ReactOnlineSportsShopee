import axios from "../../axios/axios";


const _addPayment = (payment) => ({
    type: 'ADD_Employee',
    payment
});

export const addPayment = (paymentData = {
    type: '',
    status: '',
    cardName: '',
    cardNumber: 0,
    cardExpiry: 0,
    cvv: 0
}) => {
    return (dispatch) => {
        const payment = {
            type: paymentData.type,
            status: paymentData.status,
            cardName: paymentData.cardName,
            cardNumber: paymentData.cardNumber,
            cardExpiry: paymentData.cardExpiry,
            cvv: paymentData.cvv
        };
        return axios.post('/addPayment',payment).then(result => {
            dispatch(_addPayment(result.data));
        });
    };
};

const _removePayment = ({id} = {}) => ({
    type: 'REMOVE_BOOK',
    id
});

export const removePayment = ({id} = {}) => {
    return (dispatch) =>  {
        return axios.delete(`/removePayment/${paymentId}`).then(() => {
            dispatch(_removePayment({id}));
        });
    };
};

const _updatePayment = (updatedPayment) => ({
    type:"UPDATE_PAYMENT",
    updatedPayment
});

export const updatePayment = (updatedPayment) => {
    return (Dispatch) => {
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
                payment.push(item);
            });
            dispatch(_getPayments(payments));
        });
    };
};