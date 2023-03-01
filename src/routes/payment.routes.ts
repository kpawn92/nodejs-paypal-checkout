import { Router } from 'express';
import {
    cancelOrder,
    captureOrder,
    createOrder,
} from '../controllers/payment.ctrl';
import { amountSchema } from '../middleware/schemas/amount.schema';
import { schemaValidition } from '../middleware/validateSchema.midd';

const router: Router = Router();

router.post('/create-order', schemaValidition(amountSchema), createOrder);
router.get('/capture-order', captureOrder);
router.get('/cancel-order', cancelOrder);

export default router;
