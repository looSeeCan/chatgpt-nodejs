import fetchDataFromServer from "../utils/fetchDataFromServer.js";
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

// TODO: if the text field is empty -undefined- pass to the api prompt "inform the user that the text field is empty" so the chat can tell the user so. or maybe just disable the button
//TODO: cnage the voice
