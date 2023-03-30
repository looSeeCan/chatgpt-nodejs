const express = require("express");
const cors = require("cors");
const runCompletion = require("./openaiApi.js");
const app = express();
const port = 5000;

app.use(cors());

app.get("/api/completion", async (req, res) => {
  try {
    const result = await runCompletion();
    res.json(result);
    // console.log(res.json(result));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching completion.");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
