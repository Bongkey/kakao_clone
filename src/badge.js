const navBadge = document.querySelector('.nav span');
const friendComponents = document.querySelectorAll('.user-component');
const userCompoentTiles = document.querySelectorAll('.user-component__title');

let chatCount = [];

loadUserName();

for(i=0; i<friendComponents.length; i++){
    friendComponents[i].addEventListener("click", friendComponentHandler);
    const badge = friendComponents[i].querySelector('.badge');
    friendComponents[i].querySelector('.badge').innerText = chatCount[i];
    if(chatCount[i] === null){
        badge.classList.remove('badge');
    }
}


function loadUserName () {
    userCompoentTiles.forEach(user => {
        const name = user.innerText;
        const count = localStorage.getItem(name);
        chatCount.push(count);
    });
}

function friendComponentHandler (event) {
    const title = event.currentTarget.querySelector('.user-component__title').innerText;
    const badge = event.currentTarget.querySelector('.badge');

    if(badge){
        localStorage.removeItem(title);
        badge.classList.remove('badge');
    }
    setNavBadge();
}

function setNavBadge() {
    let chatCount = 0;
    friendComponents.forEach(friendComponent => {
        const badge = friendComponent.querySelector('.badge');
        if(badge)
        chatCount = chatCount + parseInt(badge.innerText);
    });
    navBadge.innerText = chatCount;
    if(chatCount === 0){
        navBadge.classList.remove('badge')
        navBadge.classList.remove('nav_notification');
        navBadge.innerText = "";
    }
}

// initChatBadges();
setNavBadge();

