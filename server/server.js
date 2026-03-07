import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Server is live! 🚀'));

const startServer = async () => {
  try {
    await connectDB(); // Connect to MongoDB first
    app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
  } catch (error) {
    console.error('Failed to start server ', error.message);
  }
};

startServer();