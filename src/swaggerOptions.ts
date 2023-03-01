import 'dotenv/config';
export const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Validacion de pagos en paypal',
            version: '1.0.0',
            description: 'API-PAYPAL-NODEJS',
        },
        servers: [
            {
                url: <string>process.env.HOSTING,
            },
        ],
    },
    apis: ['./src/routes/*.ts'],
};
