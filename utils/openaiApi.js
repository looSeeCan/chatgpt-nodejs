const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function runCompletion(question) {
  console.log("this:", question);
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question,
    temperature: 0.5,
    max_tokens: 100,
  });
  console.log(completion.data.choices[0].text);
  return completion.data.choices[0].text;
}

module.exports = runCompletion;
