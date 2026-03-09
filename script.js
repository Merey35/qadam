const container = document.querySelector(".dot-container");
const dots = [];

const spacing = 15; // distance between dots

for (let y = spacing; y < 400; y += spacing) {
  for (let x = spacing; x < (window.innerWidth - 15); x += spacing) {

    const dot = document.createElement("div");
    dot.classList.add("dot");

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    container.appendChild(dot);
    dots.push(dot);
  }
}

document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  dots.forEach(dot => {
    const rect = dot.getBoundingClientRect();
    const dx = rect.left - mouseX;
    const dy = rect.top - mouseY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 120) {
      const scale = distance / 120;
      dot.style.transform = `scale(${scale})`;
      dot.style.opacity = scale;
    } else {
      dot.style.transform = "scale(0.5)";
      dot.style.opacity = "0.5";
    }
  });
});