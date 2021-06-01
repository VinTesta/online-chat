export default function message() {

    const messagesHist = {
        messages: {}
    }

    function geraMessage() {
        const messageTypes = {
            userLog(infoMessage) {
                var messageText = infoMessage.message.messageText
                var userId = infoMessage.message.messageUserId
                var messageHour = infoMessage.message.messageHour

                var messageBody = document.createElement('div')
                
                
                messageBody.innerHTML = `<div class="row mb-2 d-flex justify-content-end" style="height: auto;">
                                        <div id="newUserLog" class="rounded-3 bg-gradient col-12 justify-content-center">
                                            <h6 class="text-center">${ messageText } </h6>
                                            <p class="text-center">${userId}</p>
                                        </div>
                                    </div>`;
                
                document.getElementById("colMessages").appendChild(messageBody);
            },
            userMessage(infoMessage) {
                var messageText = infoMessage.message.messageText
                var userId = infoMessage.message.messageUserId
                var messageHour = infoMessage.message.messageHour
                
                var messageBody = `<div class="row mb-2" style="height: auto;">
                                            <div class=" rounded-3 bg-light bg-gradient col-md-6">
                                                <h4>${userId}</h4>
                                                <p class="text-truncate">${messageText}</p>
                                            </div>
                                        </div>`;
                
                return messageBody;
            },
            myUserMessage(infoMessage) {
                console.log('teste')
                var messageText = infoMessage.message.messageText
                var userId = infoMessage.message.messageUserId
                var messageHour = infoMessage.message.messageHour
                
                var messageBody = `<div class="row mb-2 d-flex justify-content-end" style="height: auto;">
                                        <div id="myMessage" class="rounded-3 bg-gradient col-md-6">
                                            <h4>${userId}</h4>
                                            <p class="text-truncate">${messageText}</p>
                                        </div>
                                    </div>`;
                
                return messageBody;
            }
        }

        return {
            messageTypes: messageTypes
        }
    }

    return {
        geraMessage,
        messagesHist
    }
}