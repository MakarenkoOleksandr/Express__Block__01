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
      return res.json({ ok: true, data: `${lang} removed` });
    } else if (languageMsgs[lang]) {
      return res.json({
        ok: true,
        data: `Action forbidden, ${lang} is already present in the system`,
      });
    } else {
      languageMsgs[lang] = message;
      return res.json({
        ok: true,
        data: `${lang} added with message ${message}`,
      });
    }
  } else if (languageMsgs[lang]) {
    return res.json({ ok: true, data: languageMsgs[lang] });
  }

  return res.json({
    ok: true,
    data: `Hello World in ${lang} not found`,
  });
});

app.get("/:lang/update/:message", (req, res) => {
  const lang = req.params.lang;
  const message = req.params.message;

  if (languageMsgs[lang]) {
    const previousMessage = languageMsgs[lang];
    languageMsgs[lang] = message;
    return res.json({
      ok: true,
      data: `${lang} updated from '${previousMessage}' to '${message}'`,
    });
  }

  return res.json({ ok: true, data: `Hello World in ${lang} not found` });
});

app.listen(port, () => {});
