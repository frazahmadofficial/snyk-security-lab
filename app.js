const express = require("express");
const _ = require("lodash");

const app = express();

// Fix 1: hide framework information
app.disable("x-powered-by");

app.use(express.json());

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

app.get("/", (req, res) => {
  res.json({
    message: "Snyk Security Lab",
    status: "running",
  });
});

app.get("/api/user", (req, res) => {
  const user = {
    id: 1,
    name: "Fraz",
    role: "developer",
  };

  res.json(_.pick(user, ["id", "name", "role"]));
});

app.get("/api/search", (req, res) => {
  const search = req.query.q || "";

  res.json({
    search,
  });
});

app.listen(3000, () => {
  console.log("Snyk lab running on http://localhost:3000");
});