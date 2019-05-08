const command = require('../command');

function getAction(actions, commandText) {
    return actions[commandText];
}

module.exports = async (rtm, webClient, message, actions) => {
    let messageType = message.type,
        messageText = message.text;
    if (messageType !== 'message' || !messageText) {
        return rtm.sendMessage('!!! Message empty or type not message', message.channel);
    }

    messageText = messageText.toLowerCase().trim();
    if (!command[messageText]) {
        return rtm.sendMessage('Command not found', message.channel);
    }

    const actionsFunc = getAction(actions, command[messageText]);
    return actionsFunc.run(rtm, webClient, message);
}
