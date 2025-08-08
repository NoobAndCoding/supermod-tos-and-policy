import express from "express";
import path from "path";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve("../client")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
