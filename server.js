const express = require("express");
const app = express();
const port = 4000;
const getUrlLabel = require("./routes/urlLabelHandler");

app.get("/scan-url", getUrlLabel);
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
