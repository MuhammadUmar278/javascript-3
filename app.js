function abc() {
    let message = document.getElementById("user-messages");
    let list = document.getElementById("chat-messages");

    if (message.value.trim() !== "") {
       
        list.innerHTML += `<div class="chat-message user">
                        <p>${message.value}</p>
                    </div>`;

      
        list.innerHTML += `<div class="chat-message bot" id="loading">
                        <div class="loading-spinner"></div> 
                    </div>`;

        list.scrollTop = list.scrollHeight; 

        let lowerMessage = message.value.toLowerCase();
        message.value = "";  

        
        setTimeout(function () {
            
            let loadingElement = document.getElementById("loading");
            if (loadingElement) {
                loadingElement.remove();
            }

            
            if (lowerMessage === "hello" || lowerMessage === "hello!") {
                list.innerHTML += `<div class="chat-message bot">
                            <p>Bot: Hi, How are you?</p>
                        </div>`;
            }

            if (lowerMessage === "what is saylani?" || lowerMessage === "what is saylani") {
                list.innerHTML += `<div class="chat-message bot">
                            <p>Bot: Saylani is a welfare department.</p>
                        </div>`;
            }
            if (lowerMessage === "what is ramazan" || lowerMessage === "what is ramazan") {
                list.innerHTML += `<div class="chat-message bot">
                            <p>Bot: Ramazan is a babarkat month.</p>
                        </div>`;
            }
            

            
            list.scrollTop = list.scrollHeight;

        }, 1000); 
    }
}


document.getElementById("user-messages").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {  
        abc();  
        e.preventDefault();  
    }
});
