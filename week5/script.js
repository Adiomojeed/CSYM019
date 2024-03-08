// document.addEventListener("DOMContentLoaded", () => {
//   const circle = document.getElementById("circle");
//   circle.style.opacity = 1;
//   // circle.addEventListener("click", () => {
//   //   // circle.style.backgroundColor = "blue";
//   //   // circle.style.opacity = Math.max(0, parseFloat(circle.style.opacity) - 0.1);
//   //   circle.style.left = `${Math.max(0, circle.offsetLeft - 100)}px`;
//   // });
//   // setInterval(() => {
//   //   circle.style.opacity = Math.max(0, parseFloat(circle.style.opacity) - 0.01);
//   // }, 100);
//   document.addEventListener("keydown", (e) => {
//     if (e.keyCode === 37) {
//       circle.style.left = `${Math.max(0, circle.offsetLeft - 100)}px`;
//     } else if (e.keyCode === 38) {
//       circle.style.top = `${Math.max(0, circle.offsetTop - 100)}px`;
//     } else if (e.keyCode === 39) {
//       circle.style.left = `${Math.max(0, circle.offsetLeft + 100)}px`;
//     } else if (e.keyCode === 40) {
//       circle.style.top = `${Math.max(0, circle.offsetTop + 100)}px`;
//     }
//   });
// });

function myKeyDown(event) {
  var circle = document.getElementById("circle");
  // This checks the element psoition from the left of screen
  var positionLeft = circle.offsetLeft;
  // This checks the element psoition from the top of screen
  var positionTop = circle.offsetTop;
  // Checks if left arrow key is pressed, the keyCode is 37

  if (event.keyCode === 37) {
    var newLeft = positionLeft - 100 + "px";
    // This sets the new position from the left
    circle.style.left = newLeft;
  }
  // Checks if top arrow key is pressed, the keyCode is 38
  if (event.keyCode === 38) {
    var newTop = positionTop - 100 + "px";
    // This sets the new position from the left
    circle.style.top = newTop;
  }
  // Checks if right arrow key is pressed, the keyCode is 39
  if (event.keyCode === 39) {
    var newLeft = positionLeft + 100 + "px";
    // This sets the new position from the left
    circle.style.left = newLeft;
  }
  // Checks if down arrow key is pressed, the keyCode is 40
  if (event.keyCode === 40) {
    var newTop = positionTop + 100 + "px";
    // This sets the new position from the left
    circle.style.top = newTop;
  }
}

function myPageLoad() {
  document.addEventListener("keydown", myKeyDown);
}

document.addEventListener("DOMContentLoaded", myPageLoad);
