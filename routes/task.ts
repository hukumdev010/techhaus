import express from "express";
import db from "../db";

const router = express.Router();

router.get("/task", async function (req, res, next) {
  const tasks = await db.select().table("tasks");

  res.send(tasks);
  //   res.send(tasks);
});

router.post("/task", async (req, res) => {
  const body = req.body;
  const { title, content } = body;

  // const data = JSON.parse(body);
  await db("tasks").insert({ title: title, content: content });

  // console.log("data", data);

  res.send("item saved successfully");
});

router.patch("/task/:id", async (req, res) => {
  const body = req.body;
  const { title, content } = body;

  const params = req.params;

  await db("tasks").where("id", params.id).update({
    title,
    content,
  });

  res.send("Item updated successfully");
});

router.delete("/task/:id", async (req, res) => {
  const params = req.params;

  console.log("id", params.id);

  await db("tasks").where("id", params.id).del();

  res.send("Item delelted");
});

export default router;
