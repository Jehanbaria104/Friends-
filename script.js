const envelope = document.getElementById("envelope");
const message = document.getElementById("message");
const back = document.getElementById("back");

envelope.addEventListener("click", () => {
  envelope.classList.add("hidden");
  message.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

back.addEventListener("click", () => {
  message.classList.add("hidden");
  envelope.classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
