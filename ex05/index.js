const express = require("express");
const app = express();

const port = 4040;

const languageMsgs = {
  en: "Hello World",
  nl: "Hallo Wereld",
  it: "Ciao Mondo",
};

app.get("/", (req, res) => {
  res.json({ ok: true, data: "Hello World!" });
});

app.get("/:lang", (req, res) => {
  const lang = req.params.lang.toLowerCase();
  if (languageMsgs[lang]) {
    res.json({ ok: true, data: languageMsgs[lang] });
  }
  res.json({ ok: true, data: `Hello World in ${lang} not found` });
});

app.get("/:lang/:message", (req, res) => {
  const lang = req.params.lang.toLowerCase();
  const msg = decodeURIComponent(req.params.message);

  languageMsgs[lang] = msg;

  res.json({ ok: true, data: `${lang} added with message ${msg}` });
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
