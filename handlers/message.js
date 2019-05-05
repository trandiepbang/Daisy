const command = require('../command');

function getAction(actions, commandText) {
    return actions[commandText];
}

module.exports = async (rtm, webClient, message, actions) => {
    console.log(message);
    if (message.type !== 'message' || !message.text) return console.log('!!! Message empty or type not message');
    const commandText = message.text.toLowerCase().trim();
    if (!command[commandText]) return console.log('!!! Command not found');
    return getAction(actions, command[commandText]).run(rtm, webClient, message);
}
