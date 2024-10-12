const part1 = document.querySelector("#part1");
const part2 = document.querySelector("#part2");
const form = document.querySelector("#form");
const rating = document.querySelector("#rating");
const buttons = document.querySelectorAll('[type="radio"]');

function handleSubmit(e) {
  e.preventDefault(); 
  part1.classList.toggle("block");
  part1.classList.toggle("hidden");
  part2.classList.toggle("block");
  part2.classList.toggle("hidden");
}

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    rating.textContent = e.target.id.at(-1);
  });
}

form.addEventListener("submit", handleSubmit);
