const fetchDataFromServer = async (question) => {
  try {
    const response = await fetch("http://localhost:5000/api/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question }),
    });
    console.log(response);
    if (response.ok) {
      const dataFromOpenAi = await response.json();
      // displayData(dataFromOpenAi);
      console.log(dataFromOpenAi);
      console.log(dataFromOpenAi.text);
      return dataFromOpenAi.text;
    } else {
      console.error("Error fetching data from the server:", response.status);
    }
  } catch (error) {
    console.error("Error fetching data from the server:", error);
  }
};

export default fetchDataFromServer;
