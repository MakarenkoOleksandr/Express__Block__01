const express = require("express");
const app = express();

const port = 4040;

const languageMsgs = {
  EN: "Hello world!",
  NL: "Hallo Wereld",
  IT: "Ciao Mondo",
};

app.get("/", (req, res) => {
  res.json({ ok: true, data: "Hello world" });
});

app.get("/:lang?/:message?", (req, res) => {
  const lang = req.params.lang;
  const message = req.params.message;

  if (message) {
    if (message === "remove") {
      delete languageMsgs[lang];
      res.json({ ok: true, data: `${lang} removed` });
    } else {
      languageMsgs[lang] = message;

      res.json({
        ok: true,
        data: `${lang} added with message ${message}`,
      });
    }
  } else if (languageMsgs[lang]) {
    res.json({ ok: true, data: languageMsgs[lang] });
  }

  res.json({
    ok: true,
    data: `Hello World in ${lang} not found`,
  });
});

app.listen(port, () => {});
