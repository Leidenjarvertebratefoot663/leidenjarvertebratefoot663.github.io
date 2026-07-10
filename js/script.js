const NAME = "Park, Minseok";

function typeName() {
  const el = document.getElementById("typedName");
  let i = 0;
  const timer = setInterval(() => {
    el.textContent = NAME.slice(0, i + 1);
    i++;
    if (i === NAME.length) clearInterval(timer);
  }, 80);
}

function tickClock() {
  const el = document.getElementById("clock");
  const now = new Date();
  el.textContent = now.toLocaleString("en-US", {
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("navToggle").addEventListener("click", () => {
  document.querySelector(".term-nav").classList.toggle("open");
});

typeName();
tickClock();
setInterval(tickClock, 1000);