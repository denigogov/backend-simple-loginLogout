import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

// ...

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
let login = false;

app.get("/", (req: Request, res: Response) => {
  res.send(login ? "I'm login" : "I'm logout");
});

app.post("/logout", (req: Request, res: Response) => {
  res.send(login);
});

app.post("/login", (req: Request, res: Response) => {
  login = true;
  res.send(login);
});

app.listen(port, () => {
  console.log(`⚡️ Server is running at http://localhost:${port} `);
});
