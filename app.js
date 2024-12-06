let mainBox = document.getElementById("mainBox");

let succsessMsg = 'Successfully submitted';
let warningMsg = 'Attention!';

function boxAction(msg){
    let div = document.createElement('div');

    div.classList.add("box");
    div.className = "h-[80px] w-60 p-6 font-medium bg-gray-100 shadow-md m-3 flex flex-cols items-center"
    div.innerHTML = msg;
    mainBox.appendChild(div);

    setTimeout(()=>{
        div.remove()
    }, 1500)
}