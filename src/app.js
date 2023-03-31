import fetchDataFromServer from "../utils/fetchDataFromServer.js";

const app = () => {
  const questionForm = document.querySelector("#question-form");

  questionForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const questionInput = document.getElementById("question-input");
    const question = questionInput.value;
    console.log(question);
    const reply = await fetchDataFromServer(question);
    console.log(reply);
    displayData(reply);
  });
};

app();

const displayData = (incomingReply) => {
  const p = document.getElementById("reply");
  p.innerText = incomingReply;
};

// TODO: if the text field is empty -undefined- pass to the api prompt "inform the user that the text field is empty" so the chat can tell the user so. or maybe just disable the button
