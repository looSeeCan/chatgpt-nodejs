const express = require("express");
const cors = require("cors");
const runCompletion = require("./utils/openaiApi.js");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.post("/api/completion", async (req, res) => {
  try {
    console.log(req.body);
    const question = req.body.question;
    const responseText = await runCompletion(question);
    res.json({ text: responseText });
    // console.log(res.json(result));
  } catch (error) {
    console.error(error);
    res.status(500).send("Error occurred while fetching completion.");
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
