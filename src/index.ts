import express, { Request, Response } from "express";

const app = express();
const server = express.json();
const port = process.env.PORT || 3000;
const baseURL = process.env.BASE_URL || "http://localhost";

app.use(server);

app.get("/", function (req: Request, res: Response) {
  return res.status(200).send("Server is running...");
});

app.listen(port, function () {
  console.log(`Server is running on ${baseURL}:${port}`);
});
