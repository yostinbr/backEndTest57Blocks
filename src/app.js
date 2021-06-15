import express, { json } from 'express'
import morgan from 'morgan';
import '@babel/polyfill';

//Importing routes
import videoRoute from './routes/videos';
import authRoutes from './routes/auth';

//Initialization
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/videos', videoRoute);
app.use('/api/users', authRoutes);

app.listen();

export default app;