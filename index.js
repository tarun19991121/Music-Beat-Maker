window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#00CED1",
        "#C7AA18",
        "#CE55E2",
        "#A02546",
        "#40EE3D",
        "#0F4452"
    ];

    //Lets add sounds here
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createbubbles(index);
        });
    });

    //function for making bubbles
    const createbubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this);
        });
    };
});