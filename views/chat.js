export default function createChat() {
    
    const state = {
        users: {},
        messages: {}
    }

    function addUser(userStats) {
        const userId = userStats.userId

        state.users[userId] = {
            userId: userId
        }
    }

    function removeUser(userStats) {
        const userId = userStats.userId

        delete state.users[userId]
    }

    function addMessage(messageStats) {  

        var data = new Date();
        var messageHashId = 'msg'+data.getDate()+data.getMonth()+data.getFullYear()+data.getHours()+data.getMinutes()+data.getSeconds()+data.getMilliseconds();

        const messageHour = data.getHours().toString() + ':' + data.getMinutes().toString() + ':' + data.getSeconds().toString();
        const messageDate = data.getDate().toString() + '/' + data.getMonth().toString() + '/' + data.getFullYear().toString();
        const messageId = messageHashId
        const messageUserId = messageStats.messageUserId
        const messageText = messageStats.messageText

        state.messages[messageId] = {
            messageHour: messageHour,
            messageDate: messageDate,
            messageId: messageId,
            messageUserId: messageUserId,
            messageText: messageText,
        }
    }

    return {
        removeUser: removeUser,
        addUser: addUser,
        state: state,
        addMessage: addMessage,
    }
}