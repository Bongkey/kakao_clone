const CHAT_NAME = ["카카오톡", "죠르디"];
const badge = document.querySelector('.nav .badge');

function calTotalChatCount() {
    let totalCount = 0;
    CHAT_NAME.forEach(chat => {
        if(localStorage.getItem(chat) !== null){
            const chatCount = parseInt(localStorage.getItem(chat));
            totalCount = totalCount + chatCount;
        }
    })
    badge.innerText = totalCount;
    if (totalCount === 0) {
        badge.innerText = "";
        badge.classList.remove('badge');
        badge.classList.remove('nav_notification');
    }
}

calTotalChatCount();