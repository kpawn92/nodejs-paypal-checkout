import { environment } from './env';

export const changePayload = (state: string) => {
    if (state === 'true') return environment.PAYPAL_API_TEST;
    return environment.PAYPAL_API_PRODUCTION;
};
