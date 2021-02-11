const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 2001;

app.use(cors());
app.use(require("morgan")("tiny"));
app.get(`/referenceNumber/:email`, (req, res) => {
  console.log(req.params.email);
  return res.status(200).json({ data: "A2837474848" });
});
app.listen(PORT, () => console.log("App listening on port ", PORT));
