import express from 'express';
import multer from 'multer';
import routes from './routers/index';
import exp from "constants";
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.use('/assets', express.static(path.join(__dirname,'..', 'public')));

app.use(routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
