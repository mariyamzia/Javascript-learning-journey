// Function to generate a random hex color code
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener('DOMContentLoaded', () => {
  const boxes = document.querySelectorAll('.box');

  // Loop through each box only to attach the event listener
  boxes.forEach((box) => {
    
    // Notice: No color code running here! The page loads with default CSS styles.

    box.addEventListener('click', () => {
      // Colors are generated ONLY at the exact moment of a click
      box.style.backgroundColor = getRandomColor();
      box.style.color = getRandomColor();
    });
  });
});
