function send()
{
    let message = document.querySelector('.mess_area');
    let chat = document.querySelector('.chat');

//    localStorage.setItem('0', message);
    let messageElement = document.createElement('p');
<<<<<<< Updated upstream
    messageElement.innerHTML = message.value;
    chat.appendChild(messageElement);
}
=======
    messageElement.classList.add('mymessages');
    messageElement.innerHTML = message.value;
    chat.appendChild(messageElement);
    message.value = '';
}
>>>>>>> Stashed changes
