import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from 'inngest/express';
import { inngest, functions } from './inngest/index.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('Server is live!'));

// Lazy MongoDB connection for serverless
let isConnected = false;
async function connectMongo() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
    console.log("MongoDB connected");
  }
}

// Inngest route
app.use('/api/inngest', serve({
  client: inngest,
  functions,
  onRequest: async () => {
    await connectMongo();
  }
}));

export default app; 