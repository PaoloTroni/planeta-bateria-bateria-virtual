"use strict";
const sound = {
  b: "crash.wav",
  q: "hihat-close.wav",
  o: "hihat-open.wav",
  v: "kick.wav",
  e: "ride.wav",
  w: "snare.wav",
  r: "tom-high.wav",
  i: "tom-low.wav",
  u: "tom-mid.wav",
};
let sessionRecord = [];
let isRecording = false;
const bateria = document.querySelector("#bateria");
bateria.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }
  const key = event.target.textContent.toLowerCase();
  new Audio(`/sounds/${sound[key]}`).play();
  if (isRecording) {
    sessionRecord.push({ key, timeNote: Date.now() });
    console.log(sessionRecord);
  }
});
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  if (!(key in sound)) {
    return;
  }
  new Audio(`/sounds/${sound[key]}`).play();
  if (isRecording) {
    sessionRecord.push({ key, timeNote: Date.now() });
    console.log(sessionRecord);
  }
});
const recBtn = document.querySelector("#rec");
const stopBtn = document.querySelector("#stop");
const playBtn = document.querySelector("#play");
recBtn.addEventListener("click", () => {
  isRecording = true;
  recBtn.classList.add("recording");
  sessionRecord = [];
});
stopBtn.addEventListener("click", () => {
  isRecording = false;
  recBtn.classList.remove("recording");
});

playBtn.addEventListener("click", () => {
  if (isRecording) {
    return;
  }
  for (let i = 0; i < sessionRecord.length; i++) {
    setTimeout(() => {
      new Audio(`/sounds/${sound[sessionRecord[i].key]}`).play();
    }, sessionRecord[i].timeNote - sessionRecord[0].timeNote);
  }
});
