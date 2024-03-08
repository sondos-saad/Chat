
let btnOpen = document.getElementById("start");
let chatForm = document.querySelector('.formChat');

function openChat(){
    chatForm.classList.toggle("open");
    if(chatForm.classList.contains("open")){
        chatForm.style.display = "block"
        btnOpen.innerHTML = "Close Chat"
    }else{
        chatForm.style.display = "none"
        btnOpen.innerHTML = "Start Chat"
    }
} 

btnOpen.addEventListener("click", openChat)