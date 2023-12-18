import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import mongoConnection from './config/dbconfig.js';

import userRoutes from './routes/user.js';

dotenv.config();
const app = express();
const port = process.env.PORT;
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

mongoConnection();
app.use(express.json());
app.use(cors());

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
