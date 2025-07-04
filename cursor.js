document.addEventListener("DOMContentLoaded", function () {
  const cursor = document.getElementById("custom-cursor");
  const path = cursor.querySelector("path");

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX - 20}px`;
    cursor.style.top = `${e.clientY - 20}px`;
  });

  document.addEventListener("mouseover", (e) => {
    const bgColor = window.getComputedStyle(e.target).backgroundColor;
    const color = getComplementaryColor(bgColor);
    path.setAttribute("stroke", color);
  });

  function getComplementaryColor(rgb) {
    const result = rgb.match(/\d+/g);
    if (!result) return "white";
    let [r, g, b] = result.map(Number);
    return `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
  }
});
