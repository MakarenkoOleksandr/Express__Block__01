const express = require("express");
const app = express();

const port = 4040;

const languageMsgs = {
  EN: "Hello world!",
  NL: "Hallo Wereld",
  IT: "Ciao Mondo",
};

app.use("/", (req, res) => {
  res.json({ ok: true, data: "Hello world" });
});

app.use("/:lang/:message", (req, res) => {
  const lang = req.params.lang;
  const message = req.params.message;

  console.log(message);
  if (message) {
    languageMsgs[lang] = message;

    res.json({
      ok: true,
      data: `${lang} added with message ${message}`,
    });
  } else if (languageMsgs[lang]) {
    res.json({ ok: true, data: languageMsgs[lang] });
  }

  res.json({
    ok: true,
    data: `Hello World in ${lang} not found`,
  });
});

app.listen(port, () => {});
