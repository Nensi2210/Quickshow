import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { inngest } from "./inngest/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('Server is live!'));

app.use('/api/inngest', serve({
  client: inngest,
  functions: []
}));

// connect DB
await connectDB();

// ❗ Vercel ke liye export karna zaroori
export default app;