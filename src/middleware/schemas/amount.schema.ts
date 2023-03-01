import { z } from 'zod';

export const amountSchema = z.object({
    body: z.object({
        currency_code: z.string().min(3).max(3),
        value: z.string().nonempty(),
    }),
});

export type AmountBodyType = z.infer<typeof amountSchema>['body'];
