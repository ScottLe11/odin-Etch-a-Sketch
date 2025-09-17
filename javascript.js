const container = document.querySelector("#container");
const square = 4

for (let i = 0; i < square; ++i){
    const outer = document.createElement("div");
    for (let k = 0; k < square; ++k){
        const div = document.createElement("div");
        div.textContent = i * square + k;
        div.setAttribute("style","border-color: black;");
        outer.appendChild(div);
    }
    container.appendChild(outer);
}