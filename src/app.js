import fetchDataFromServer from "./utils/fetchDataFromServer.js";
import displayData from "./displayData.js";

const app = () => {
  const questionForm = document.querySelector("#question-form");

  questionForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const questionInput = document.getElementById("question-input");
    let question = questionInput.value;
    console.log(question);

    !question
      ? (question = `Tell the use to enter a question or comment in the input box above.`)
      : (question = questionInput.value);
    const reply = await fetchDataFromServer(question);

    console.log(reply);
    displayData(reply);
  });
};

app();

//TODO: cnage the voice
console.log("hello");

test('function sayHello returns "Hello, world!"', () => {
  expect(sayHello()).toBe("Hello, world!");
});
