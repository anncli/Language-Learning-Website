//generate welcome express api
import express from 'express';

import { Request, Response } from 'express';
import routes from './routes/index.routes';
var cors = require('cors')
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send("Welcome to LLW Backend")
});
app.use(cors())
app.use("/api/v1",routes)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
