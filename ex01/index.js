const express = require("express");
const app = express();

const port = 4040;

app.get("/", (req, res) => {
  res.json({ ok: true, data: "Hello world" });
});

app.get("/:lang?", (req, res) => {
  const lang = req.params.lang;

  switch (lang.toUpperCase()) {
    case "NL":
      res.json({ ok: true, data: "Hallo Wereld" });
      break;
    case "IT":
      res.json({ ok: true, data: "Ciao Mondo" });
      break;
    default:
      res.json({ ok: true, data: "Hello World" });
  }
});

app.listen(port, () => {});
