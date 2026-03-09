import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from "inngest/express";
import { Inngest } from "inngest";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

app.get('/', (req, res) => res.send('Server is live!'));

// Inngest client
const inngest = new Inngest({ id: "quickshow-app" });

// Inngest function (simple test function)
const testFunction = inngest.createFunction(
  { id: "test-function" },
  { event: "test/event" },
  async ({ event }) => {
    console.log("Event received:", event);
    return { message: "Inngest working 🚀" };
  }
);

// Inngest route
app.use('/api/inngest', serve({
  client: inngest,
  functions: [testFunction]
}));

// MongoDB connect
await connectDB();

// Vercel ke liye export
export default app;