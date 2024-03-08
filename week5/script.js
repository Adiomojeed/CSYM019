document.addEventListener("DOMContentLoaded", () => {
  const circle = document.getElementById("circle");
  circle.style.opacity = 1;
  circle.addEventListener("click", () => {
    // circle.style.backgroundColor = "blue"; 
    // circle.style.opacity = Math.max(0, parseFloat(circle.style.opacity) - 0.1);
    circle.style.left = `${Math.max(0, circle.offsetLeft - 100)}px`;
  });
  // setInterval(() => {
  //   circle.style.opacity = Math.max(0, parseFloat(circle.style.opacity) - 0.01);
  // }, 100);
});
