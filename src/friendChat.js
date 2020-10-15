const chatForm = document.querySelector('.reply');
const chatInput = document.querySelector('#chat__input');
let chatCount = 0;
loadChat();

chatForm.addEventListener("submit", chatFormHandler);

function loadChat() {
    let chats = [];
    for (i = 0; i < localStorage.length; i++) {
        const chat = localStorage.getItem("CHAT" + i);
        if (chat !== null) {
            chatCount = i;
            chats.push(chat);
        }
    }

    chats.forEach(chat => {
        createChat(chat);
    });
}

function chatFormHandler(event) {
    event.preventDefault();
    const currentText = chatInput.value;
    localStorage.setItem("CHAT" + chatCount, currentText);
    chatCount += 1;
    createChat(currentText);
    chatInput.value = "";
}

function createChat(text) {
    const mainChat = document.querySelector('.main-chat');
    const messageRowDiv = document.createElement("div");
    const messageRowContentDIv = document.createElement("div");
    const messageInfoDiv = document.createElement("div");
    const messageState = document.createElement("p");
    const messageBubbleSpan = document.createElement("span");
    const messageTimeSpan = document.createElement("span");

    messageRowDiv.classList.add('message-row');
    messageRowDiv.classList.add('message-row--own');
    messageRowContentDIv.classList.add('message-row__content');
    messageInfoDiv.classList.add('message__info');
    messageState.classList.add('message__state');
    messageBubbleSpan.classList.add('message__bubble');
    messageTimeSpan.classList.add('message__time');

    messageRowDiv.appendChild(messageRowContentDIv);
    messageRowContentDIv.appendChild(messageInfoDiv);

    messageInfoDiv.appendChild(messageBubbleSpan);
    messageInfoDiv.appendChild(messageTimeSpan);
    messageInfoDiv.appendChild(messageState);

    messageState.innerText = "1";
    messageBubbleSpan.innerText = text;
    messageTimeSpan.innerText = "18:43";
    mainChat.appendChild(messageRowDiv);
}