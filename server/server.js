// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/db.js';
import { clerkMiddleware } from '@clerk/express';
import { serve } from 'inngest/express';
import { Inngest } from 'inngest';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// Test route
app.get('/', (req, res) => res.send('Server is live!'));

// Inngest client
const inngest = new Inngest({ id: "quickshow-app" });

// Simple Inngest test function
const testFunction = inngest.createFunction(
  { id: "test-function" },
  { event: "test/event" },
  async ({ event }) => {
    try {
      console.log("Event received:", event);
      return { message: "Inngest working 🚀" };
    } catch (err) {
      console.error("Error in Inngest function:", err);
      throw err;
    }
  }
);

// MongoDB connect
// For serverless, ensure connection is async-friendly
let isConnected = false;
async function connectMongo() {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
    console.log("MongoDB connected");
  }
}

// Inngest route with MongoDB connection
app.use('/api/inngest', serve({
  client: inngest,
  functions: [testFunction],
  onRequest: async () => {
    // Connect DB before handling any Inngest event
    await connectMongo();
  }
}));

// Vercel ke liye export
export default app;