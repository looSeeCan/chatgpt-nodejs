const fetchDataFromServer = async () => {
  console.log("this is from app.js");
  try {
    const response = await fetch("http://localhost:5000/api/completion");
    if (response.ok) {
      const dataFromOpenAi = await response.json();
    } else {
      console.error("Error fetching data from the server:", response.status);
    }
  } catch (error) {
    console.error("Error fetching data from the server:", error);
  }
};

fetchDataFromServer();
