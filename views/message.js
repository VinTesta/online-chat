export default function message() {

    const messagesHist = {
        messages: {}
    }

    function factoryMessage(stats) {
        return {
            messageUserId: stats.userId,
            messageText: document.getElementById("inputMessage").value
        };
    }

    function addMessage(messageStats) {  

        var data = new Date();
        var messageHashId = 'msg'+data.getDate()+data.getMonth()+data.getFullYear()+data.getHours()+data.getMinutes()+data.getSeconds()+data.getMilliseconds();

        const messageHour = data.getHours().toString() + ':' + data.getMinutes().toString() + ':' + data.getSeconds().toString();
        const messageDate = data.getDate().toString() + '/' + data.getMonth().toString() + '/' + data.getFullYear().toString();
        const messageId = messageHashId
        const messageUserId = messageStats.messageUserId
        const messageText = messageStats.messageText


        messagesHist.messages[messageId] = {
            messageHour: messageHour,
            messageDate: messageDate,
            messageId: messageId,
            messageUserId: messageUserId,
            messageText: messageText,
        }
    }

    return {
        addMessage: addMessage,
        messagesHist: messagesHist,
        factoryMessage: factoryMessage
    }
}