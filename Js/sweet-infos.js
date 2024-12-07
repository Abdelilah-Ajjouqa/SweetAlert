let bigPopup = document.getElementById("bigPopup");

let infosMsg = ``;

function popupAction(message){
    let diiv = document.createElement('div');

    diiv.classList.add("popupInfos");
    diiv.innerHTML = `
    <div class="flex justify-around">
    <h1 class="text-center text-xl text-white">Infos : </h1>
    <div class="flex justify-center">
    <button id="exit" class="px-3 bg-red-500 rounded-md">Cancel</button>
    </div>
    </div>
    <ul>
    <li>name:<br>&nbsp XXXXX</li>
    <li>age:<br>&nbsp 00000</li>
    <li>address:<br>&nbsp XXXXXXXXXX</li>
    </ul>
    `;
    bigPopup.appendChild(diiv);

    const exit = document.getElementById("exit");
    exit.addEventListener("click", ()=>{
        diiv.classList.add("hidden")
    })
}