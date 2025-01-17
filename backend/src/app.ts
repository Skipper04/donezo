import express from "express";
import routes from "./routes/routes";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/", routes);

export default app;
