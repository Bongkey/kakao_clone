const userComponent = document.querySelector('a:last-child .user-component');
const subTitle = userComponent.querySelector('.user-component__subtitle');
const time = userComponent.querySelector('.user-component__time');

loadChat();

function loadChat() {
    let lastChat = "";
    for (i = 0; i < localStorage.length; i++) {
        const chat = localStorage.getItem("CHAT" + i);
        if (chat !== null) {
            lastChat = chat;
        }
    }
    console.log(lastChat);
    if(lastChat !== null && lastChat !==""){
        subTitle.innerText = lastChat;
        time.innerText = "18:43";
    }
    
}
