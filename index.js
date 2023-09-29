import express from "express";
import cors from "cors";
import RoomRouter from "./Router/Room.Router.js";

const app = express();
// PORT
const port = 3001;
app.use(cors());
app.use(express.json());
// Router
app.use("/api/room", RoomRouter);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
