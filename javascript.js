
const button = document.querySelector("#newEtch");
button.addEventListener("click", ()=>{
    let input = prompt("Enter amount of width and height blocks (Max: 100)");
    // const deleteAllBoxes = document.querySelectorAll(".boxes");
    // deleteAllBoxes.forEach( box => {
    //     box.remove();
    // });
    
    const container = document.querySelector("#container");
    container.innerHTML = "";

    createEtch(input);
});



function createEtch(square){
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

}



