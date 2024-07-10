let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Your Task Here")
    }else{
        let newEle = document.createElement("ul");
        newEle.innerHTML=`${inputs.value} <iconify-icon icon="streamline:delete-1-solid"></iconify-icon>`;
        text.appendChild(newEle);
        inputs.value="";
        newEle.querySelector("iconify-icon").addEventListener("click" , remove);
        function remove(){
            newEle.remove()
        }
    }
}