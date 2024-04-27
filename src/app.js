import express from 'express';
import bodyParser from 'body-parser';

import empleadoRoutes from './routes/empleado.routes.js'
import { PORT } from './config.js'

const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use('/api', empleadoRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'EndPoint no encontrado!!'
    });
});

export default app;
