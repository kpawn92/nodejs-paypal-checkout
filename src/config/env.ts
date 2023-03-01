import 'dotenv/config';
import { Environment } from '../types';

const {
    HOSTING,
    PAYPAL_DEV,
    PAYPAL_CLIENT_ID,
    PAYPAL_SECRET,
    PAYPAL_API_TEST,
    PAYPAL_API_PRODUCTION,
    LANDING_PAGE,
} = process.env;

export const environment: Environment = {
    PAYPAL_DEV: String(PAYPAL_DEV),
    PAYPAL_CLIENT_ID: String(PAYPAL_CLIENT_ID),
    PAYPAL_SECRET: String(PAYPAL_SECRET),
    PAYPAL_API_TEST: String(PAYPAL_API_TEST),
    PAYPAL_API_PRODUCTION: String(PAYPAL_API_PRODUCTION),
    HOSTING: String(HOSTING),
    LANDING_PAGE: String(LANDING_PAGE),
};
