import express from "express";
import { exec } from "child_process";

const app = express();
const port = process.env.PORT || 3000;

// Jalankan n8n di background
exec("npx n8n start", (err, stdout, stderr) => {
  if (err) {
    console.error(`Error starting n8n: ${err}`);
    return;
  }
  console.log(stdout);
  console.error(stderr);
});

app.get("/", (req, res) => {
  res.send("n8n AI Assistant is running on Render!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
