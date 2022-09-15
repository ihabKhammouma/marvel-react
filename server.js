import express from "express";
import { fileURLToPath } from "url";
import path from "path";
var app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "dist")));
const port = process.env.PORT || 3000;
app.listen(port);
