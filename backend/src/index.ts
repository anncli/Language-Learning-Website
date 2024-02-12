//generate welcome express api
import express from 'express';
import { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;


app.use('/', (req: Request, res: Response) => {
    res.send("Welcome to LLW Backend")
});

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
