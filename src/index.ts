import 'dotenv/config';
import app from './app';
// import axios from 'axios';

// const body = {
//     intent: 'CAPTURE',
//     purchase_units: [
//         {
//             amount: {
//                 currency_code: 'EUR',
//                 value: '100.00',
//             },
//         },
//     ],
//     application_context: {
//         brand_name: `${process.env.LANDING_PAGE}`,
//         landing_page: 'LOGIN',
//         user_action: 'PAY_NOW',
//         return_url: `${process.env.HOSTING}/capture-order`,
//         cancel_url: `${process.env.HOSTING}/cancel-order`,
//     },
// };

// const testAxios = async (url: string) => {
//     const response = await axios.post(url, body, {
//         auth: {
//             username: String(process.env.PAYPAL_CLIENT_ID),
//             password: String(process.env.PAYPAL_SECRET),
//         },
//     });
//     return response.data;
// };

async function main() {
    app.listen(process.env.PORT || 3000);
    // console.log(
    //     await testAxios(
    //         String(process.env.PAYPAL_API_TEST) + '/v2/checkout/orders'
    //     )
    // );
    console.log('Servidor listo en el puerto: ' + process.env.PORT);
}

main();
