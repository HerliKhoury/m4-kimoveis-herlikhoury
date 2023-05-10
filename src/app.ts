import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import { schedulesRoutes } from "./routes/schedules.routes";
import { realStateRoutes } from "./routes/realState.routes";
import { categoriesRoutes } from "./routes/categories.routes";
import { loginRoutes } from "./routes/login.routes";
import { userRoutes } from "./routes/user.routes";


const app = express()
app.use(express.json())

app.use("/schedules", schedulesRoutes);
app.use("/realEstate", realStateRoutes);
app.use("/categories", categoriesRoutes);
app.use("/login", loginRoutes);
app.use("/users", userRoutes);

app.use(errorHandler);
export default app