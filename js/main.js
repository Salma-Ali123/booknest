let topBtn = document.getElementById('topBtn');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = 'block'
    }
    else{
        topBtn.style.display = 'none'
    }
}
topBtn.addEventListener('click' , function(){
    window.scroll({
        top:0 , 
        behavior:"smooth",
    })
})

//live chat code
document.getElementById("chat-toggle").addEventListener("click", function () {
    document.getElementById("chat-container").style.display = "block";
    document.getElementById("chat-toggle").style.display = "none";
});

document.getElementById("close-chat").addEventListener("click", function () {
    document.getElementById("chat-container").style.display = "none";
    document.getElementById("chat-toggle").style.display = "block";
});

document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("chat-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    let inputField = document.getElementById("chat-input");
    let message = inputField.value.trim();
    
    if (message !== "") {
        addMessage(message, "user-message");
        inputField.value = "";
        setTimeout(() => addMessage("Hello! How can I help you?", "bot-message"), 1000);
    }
}

function addMessage(text, className) {
    let messageContainer = document.getElementById("chat-messages");
    let msgDiv = document.createElement("div");
    msgDiv.className = "message " + className;
    msgDiv.innerText = text;
    messageContainer.appendChild(msgDiv);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

//validation
function form(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let message = document.getElementById("message")
    if (name === '' || email === '' || password === '' || message === ''){
        alert('please input all feilds');
        return false
    }
    if(email.indexOf('@') === -1 || email.indexOf('.') === -1){
        alert('please input valid email');
        return false
    }
    return true
}