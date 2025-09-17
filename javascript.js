const container = document.querySelector("#container");
const square = 16

for (let i = 0; i < square; ++i){
    const outer = document.createElement("div");
    outer.className = "line";
    for (let k = 0; k < square; ++k){
        const div = document.createElement("div");
        div.className = "boxes";
        div.textContent = i * square + k;
        div.setAttribute("style","border-color: black;");
        outer.appendChild(div);
    }
    container.appendChild(outer);
}

const allBoxes = document.querySelectorAll(".boxes");
allBoxes.forEach(box => {
    box.addEventListener("mouseover",() =>{
        box.style.background = "black";
    });
});