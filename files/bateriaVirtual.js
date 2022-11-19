"use strict";
const sound = {
  b: "crash.wav",
  q: "hihat-close.wav",
  o: "hihat-open.wav",
  v: "kick.wav",
  e: "ride.wav",
  w: "snare.wav",
  r: "tom-high.wav",
  u: "tom-low.wav",
  i: "tom-mid.wav",
};
const sessionRecord = [];
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
});
stopBtn.addEventListener("click", () => {
  isRecording = false;
  recBtn.classList.remove("recording");
});

playBtn.addEventListener("click", () => {
  alert("☹️ Lo sentimos, esa funcionalidad todavía no está disponible.");
});
// playBtn.addEventListener("click", () => {
//   if (isRecording) {
//     return;
//   }
//   new Audio(`/sounds/${sound[sessionRecord[0].key]}`).play();
//   setTimeout(() => {
//     new Audio(`/sounds/${sound[sessionRecord[1].key]}`).play();
//   }, sessionRecord[1].timeNote - sessionRecord[0].timeNote);
// });

// for(let i=0; i=sessionRecord.length; i++)
// Date.now();
// setTimeout();
