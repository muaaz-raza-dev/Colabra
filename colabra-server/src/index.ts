import dotenv from 'dotenv';
dotenv.config();

// The code above should be working correctly. If it's not, there might be other issues:
// 1. Make sure the .env file is in the root directory of your project.
// 2. Check if the .env file is properly formatted (no spaces around '=').
// 3. Verify that the 'dotenv' package is installed (npm install dotenv).
// 4. If using TypeScript, ensure @types/dotenv is installed (npm install --save-dev @types/dotenv).
// 5. If the issue persists, try moving this code to the very top of the file, before any other imports.

// If none of the above solves the issue, please provide more details about the specific problem you're encountering.
import express from 'express';
import cors from 'cors';
import { dbConnection } from './db.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors({ origin: "*", credentials: true }));


// Route for the home page
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


//1. Connecting to db
//2. Start the server
dbConnection().then(_=>
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  })
)

