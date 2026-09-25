import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { createServer } from "./index";

// Production entry: serves the built SPA and the API from one Node process
const app = createServer();
const port = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, "../spa");

app.use(express.static(distPath));

// Send index.html for any non-API route so client-side routing works on refresh
app.get(/^(?!\/api\/).*/, (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
  console.log(`PERIOD Ontario server running on port ${port}`);
});
