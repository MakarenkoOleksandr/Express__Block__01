const express = require("express");
const app = express();

const port = 4040;

const accounts = {};

app.use("/account/new/:accountID/:amount", (req, res) => {
  const accountID = req.params.accountID;
  const amount = parseFloat(req.params.amount);

  if (accounts[accountID]) {
    res.json({ ok: true, data: `Account ${accountID} already exists` });
  }

  accounts[accountID] = amount;

  res.json({
    ok: true,
    data: `Account ${accountID} created with ${amount} euros`,
  });
});

app.use("/:accountID/balance", (req, res) => {
  const accountID = req.params.accountID;
  const balance = accounts[accountID];

  if (isNaN(balance)) res.json({ ok: true, data: "Account not found" });

  res.json({
    ok: true,
    data: balance,
  });
});

app.use("/:accountID/withdraw/:amount", (req, res) => {
  const accountID = req.params.accountID;
  const amount = parseFloat(req.params.amount);
  const balance = accounts[accountID];

  if (isNaN(balance)) res.json({ ok: true, data: "Account not found" });
  if (balance < amount) res.json({ ok: true, data: "Insufficient funds" });

  accounts[accountID] -= amount;

  res.json({
    ok: true,
    data: `${amount} euros taken from account num ${accountID}`,
  });
});

app.use("/:accountID/deposit/:amount", (req, res) => {
  const accountID = req.params.accountID;
  const amount = parseFloat(req.params.amount);
  const balance = accounts[accountID];

  if (isNaN(balance)) {
    res.json({ ok: true, data: "Account not found" });
  }

  accounts[accountID] += amount;

  res.json({
    ok: true,
    data: `${amount} euros added to account num ${accountID}`,
  });
});

app.use("/:accountID/delete", (req, res) => {
  const accountID = req.params.accountID;

  delete accounts[accountID];

  res.json({
    ok: true,
    data: `Account num ${accountID} deleted`,
  });
});

app.use("/*", (req, res) => {
  res.json({ ok: true, data: "404 resource not found" });
});

app.listen(port, () => {});
