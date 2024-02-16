const express = require("express");
const app = express();

const port = 4040;

app.get("/", (req, res) => {
  res.json({ ok: true, data: "Hello world" });
});

app.get("/:lang", (req, res) => {
  const lang = req.params.lang.toLowerCase();
  let msg = "Hello World";

  switch (lang) {
    case "nl":
      msg = "Hallo Wereld";
      break;
    case "it":
      msg = "Ciao Mondo";
      break;
    default:
      break;
  }

  res.json({ ok: true, data: msg });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
