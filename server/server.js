import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest } from "./inngest/index.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware())

app.get('/', (req, res) => res.send('Server is live!'));

app.use('/api/inngest', serve({
  client: inngest,
  functions: []   // ✅ FIX
}));

const startServer = async () => {
  try {
    await connectDB();
    app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
  } catch (error) {
    console.error('Failed to start server ', error.message);
  }
};

startServer();