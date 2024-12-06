let bigPopup = document.getElementById("bigPopup");

let infosMsg = ``;

function popupAction(message){
    let diiv = document.createElement('div');

    diiv.classList.add("popupInfos");
    diiv.innerHTML = `
    <h1 class="text-center text-xl text-white">Infos : </h1>
    <ul>
    <li>name:<br>&nbsp XXXXX</li>
    <li>age:<br>&nbsp 00000</li>
    <li>address:<br>&nbsp XXXXXXXXXX</li>
    </ul>
    `;
    bigPopup.appendChild(diiv);
}