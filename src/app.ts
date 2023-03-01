import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//SWAGGER
import swaggerUI from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { options } from './swaggerOptions';

import paymentRoute from './routes/payment.routes';

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(paymentRoute);

const specs = swaggerJSDoc(options);

// Swagger UI
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.use(express.static(path.join(__dirname, '../public')));
export default app;
