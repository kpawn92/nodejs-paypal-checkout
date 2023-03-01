import axios from 'axios';
import { Request, Response } from 'express';
import { changePayload } from '../config/changePayload';
import { environment } from '../config/env';
import { payments } from '../libs/payments';
import { AmountBodyType } from '../middleware/schemas/amount.schema';

export const createOrder = async (
    req: Request<unknown, unknown, AmountBodyType>,
    res: Response
) => {
    try {
        const payload = changePayload(environment.PAYPAL_DEV);
        const body = {
            intent: 'CAPTURE',
            purchase_units: [
                {
                    amount: {
                        currency_code: req.body.currency_code,
                        value: req.body.value,
                    },
                },
            ],
            application_context: {
                brand_name: `${process.env.LANDING_PAGE}`,
                landing_page: 'LOGIN',
                user_action: 'PAY_NOW',
                return_url: `${process.env.HOSTING}/capture-order`,
                cancel_url: `${process.env.HOSTING}/cancel-order`,
            },
        };

        const response = await axios.post(
            payload + '/v2/checkout/orders',
            body,
            {
                auth: {
                    username: String(process.env.PAYPAL_CLIENT_ID),
                    password: String(process.env.PAYPAL_SECRET),
                },
            }
        );
        return res.status(200).json(response.data);
    } catch (e) {
        return res.status(500).json({ message: 'Error: ' + e });
    }
};

export const captureOrder = async (req: Request, res: Response) => {
    try {
        const payload = changePayload(environment.PAYPAL_DEV);
        const { token } = req.query;
        const response = await axios.post(
            `${payload}/v2/checkout/orders/${token}/capture`,
            {},
            {
                auth: {
                    username: String(process.env.PAYPAL_CLIENT_ID),
                    password: String(process.env.PAYPAL_SECRET),
                },
            }
        );
        payments(response.data);
        return res.redirect('/payed.html');
    } catch (e) {
        return res.status(500).json({ message: 'Error: ' + e });
    }
};

export const cancelOrder = async (_req: Request, res: Response) => {
    res.redirect('/');
};
