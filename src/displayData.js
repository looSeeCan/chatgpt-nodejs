const displayData = async (incomingReply) => {
  const p = document.getElementById("reply");
  p.innerText = incomingReply;

  /// text to speach
  const utterance = new SpeechSynthesisUtterance(p.innerText);
  utterance.pitch = 1;
  console.log(utterance);

  /// fill the window speech. if this step is not done. you get an empty array
  await waitForVoicesToLoad();
  ///filter the voices and select a voice. //TODO: this needs work. there is supposed to be a filter, but, i just hardcoded the value of the voices array.
  /// I may eventually use a voice api anyways
  setVoicesForUtterance(utterance, "en-US");
  window.speechSynthesis.speak(utterance);
};

const waitForVoicesToLoad = async () => {
  return new Promise((resolve) => {
    window.speechSynthesis.getVoices().length > 0
      ? resolve()
      : window.speechSynthesis.addEventListener("voiceschanged", resolve, {
          once: true,
        });
  });
};

const setVoicesForUtterance = (item1, item2) => {
  const voices = window.speechSynthesis.getVoices();
  console.log(voices);
  console.log(voices[2]);
  const filteredVoices = voices.filter((voice) => voice.lang === item2);
  console.log(filteredVoices);

  item1.voice = voices[0];
  // item1.voice = filteredVoices[10];

  //   selectedVoice
  //     ? (item1.voice = voices[3])
  //     : console.warn`No voice found for language: ${item2}`;
};

export default displayData;
