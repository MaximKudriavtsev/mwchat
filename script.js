function send()
{
    let message = document.querySelector('.mess_area');
    let chat = document.querySelector('.chat');

//    localStorage.setItem('0', message);
    let messageElement = document.createElement('p');
    messageElement.value = message.value;
    chat.appendChild(messageElement);
}