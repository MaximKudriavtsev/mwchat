

let chat = document.querySelector('.chat');
let oldMessageElement;
let key = '0';

while (localStorage.getItem(key) != null)
{
    oldMessageElement = document.createElement('p');
    oldMessageElement.classList.add('mymessages');
    oldMessageElement.innerHTML = localStorage.getItem(key);
    chat.appendChild(oldMessageElement);
    key = String(Number(key) + 1);
}

function send()
{
    let message = document.querySelector('.mess_area');
    localStorage.setItem(key, message.value);
    let messageElement = document.createElement('p');
    messageElement.classList.add('mymessages');
    messageElement.innerHTML = message.value;
    chat.appendChild(messageElement);
    key = String(Number(key) + 1);
    message.value = '';
}