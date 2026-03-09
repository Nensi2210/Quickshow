// inngest/index.js
import { Inngest } from 'inngest';
import User from '../models/User.js';
import connectDB from '../configs/db.js';

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Serverless-safe DB connect function
async function ensureDB() {
  await connectDB();
}

// User creation
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    try {
      await ensureDB();
      const { id, first_name, last_name, email_addresses, image_url } = event.data;
      await User.create({
        _id: id,
        email: email_addresses[0].email_address,
        name: first_name + " " + last_name,
        image: image_url
      });
      console.log("User created:", id);
    } catch (err) {
      console.error("Error creating user:", err);
    }
  }
);

// User deletion
const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    try {
      await ensureDB();
      const { id } = event.data;
      await User.findByIdAndDelete(id);
      console.log("User deleted:", id);
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  }
);

// User update
const syncUserUpdation = inngest.createFunction(
  { id: "update-user-from-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    try {
      await ensureDB();
      const { id, first_name, last_name, email_addresses, image_url } = event.data;
      await User.findByIdAndUpdate(id, {
        email: email_addresses[0].email_address,
        name: first_name + " " + last_name,
        image: image_url
      });
      console.log("User updated:", id);
    } catch (err) {
      console.error("Error updating user:", err);
    }
  }
);

// Export all functions
export const functions = [
  syncUserCreation,
  syncUserDeletion,
  syncUserUpdation
];