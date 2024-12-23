import { PrismaClient } from "@prisma/client";
import { envsValues } from "./env.config.js";

export const db = new PrismaClient();
export const connectDB = async () => {
  try {
    await db.$connect();
    console.log(`Successful connection to the PostgreSQL ${envsValues.NODE_ENV} database`);

  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  } 
};