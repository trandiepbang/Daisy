const { spawn } = require('child_process');
const path = require('path');
const config = require('../../config')

module.exports = {
    run: async (rtm, webClient, message) => {
        await rtm.sendMessage(`# Get info comand received`, message.channel);
        await rtm.sendMessage(`# Executing ...`, message.channel);
        ls = spawn(path.join(config.shell_script_folder, 'get-info.sh'));
        ls.stdout.on('data', async data => {
            await rtm.sendMessage(data.toString(), message.channel);
        });
    }
}