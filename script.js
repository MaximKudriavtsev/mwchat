function send()
{
    let message = document.querySelector('.mess_area');
    let chat = document.querySelector('.chat');

//    localStorage.setItem('0', message);
    let messageElement = document.createElement('p');
    messageElement.classList.add('mymessages');
    messageElement.innerHTML = message.value;
    messageElement.
    chat.appendChild(messageElement);
    message.value = '';
}
