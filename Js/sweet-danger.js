let box = document.querySelector("#box");
let dangerMsg = "";

function dangerPopup(msg){
    let div = document.createElement("div");

    // div.classList.add("popupDanger");
    div.innerHTML =`
    <div class="title">
            <h1 class="text-2xl">You Can't do that ! </h1>
        </div>
        <div id="exit" class="divBtn">
            <button class="btn">Cancel</button>
        </div>
    `;
    box.appendChild(div);

    const exit = document.getElementById("exit");
    exit.addEventListener("click", ()=>{
        div.classList.add("hidden");
    })
}