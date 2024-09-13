import express, {Request, Response} from 'express';
import routesIndex from './routes/index';
const app = express();

const port = process.env.PORT || 3000;

app.use(routesIndex);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// TODO cambiar el sript a npm start