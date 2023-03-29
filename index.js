const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

// console.log(Configuration, OpenAIApi);
console.log(process.env.OPENAI_API_KEY);

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// // console.log(configuration);
// const openai = new OpenAIApi(configuration);

// async function runCompletion() {
//   const completion = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: "How are you today?",
//   });
//   console.log(completion.data.choices[0].text);
// }

// runCompletion();
