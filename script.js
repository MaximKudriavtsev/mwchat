const DATA_KEY = 'DATA_KEY';
const chatData = localStorage.getItem(DATA_KEY) && [];
const inputElement = document.querySelector('.mess_area');

function renderChatMessages(chatElement, messages) {
    messages.forEach(fuction(message) {
        const messageElement = document.createElement('p');
        messageElement.classList.add('mymessages');
        messageElement.innerHTML = message;
        
        chatElement.appendChild(messageElement);
    });
}

fuction addMessage(text) {
    chatData.push(text);
    localStorage.setItem(DATA_KEY, chatData);
    renderChatMessages([text]);
}

fuction buttonClickHandler() {
    const message = document.querySelector('.mess_area');
    addMessage(message.value);
    message.value = '';
}

inputElement.addEventListener('click', inputChangeHandler);

renderChatMessages(chatData);
