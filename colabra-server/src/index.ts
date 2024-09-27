import dotenv from 'dotenv';
dotenv.config();
import authRoute from "./routes/auth.route"
import express from 'express';
import cors from 'cors';
import { dbConnection } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));


// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use("/api/v1/auth", authRoute);

//1. Connecting to db
//2. Start the server
dbConnection().then(_=>
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
)

