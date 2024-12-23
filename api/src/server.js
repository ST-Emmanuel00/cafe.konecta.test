import express from 'express';
import cors from "cors";
import { corsValues } from './common/config/index.js';
import { errorHandler, limiter } from './common/middlewares/index.js';
import routes from './routes.js';

const server = express();

// Middlewares
server.use(express.json());
server.use(cors(corsValues));

server.use(limiter);

// Routes
server.use("/v1", routes);

// Error handler should be the last middleware
server.use(errorHandler);

export default server;