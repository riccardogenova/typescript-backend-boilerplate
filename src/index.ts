import express, { Request, Response } from "express";

const app = express();
const server = express.json();

app.use(server);

app.get("/", function (req: Request, res: Response) {
  return res.status(200).send("Server is running...");
});

app.listen(3000, function () {
  console.log(`Server is running on http://localhost:3000`);
});
