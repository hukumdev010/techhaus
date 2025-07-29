import express from "express";
import path from "path";
import taskrouter from "./routes/task";

const app = express();
const port = 3000;

app.use;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(taskrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
