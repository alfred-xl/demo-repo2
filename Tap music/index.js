window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#60d394",
    "#57c9dd",
    "#2454bb",
    "#ccdc3e",
    "#e64764",
    "#9c67d1",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", () => {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation='jump 1s ease'
    bubble.addEventListener('animationend',()=>{
        visual.removeChild()
    })
  };
});
