const CHAT_NAME = ["카카오톡","죠르디"];
const CHAT_COUNT = [1,2];

for(i=0; i<CHAT_NAME.length; i++) {
    localStorage.setItem(CHAT_NAME[i],CHAT_COUNT[i]);
}