import fetchDataFromServer from "./fetchDataFromServer.js";

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
