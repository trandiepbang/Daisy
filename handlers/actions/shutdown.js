const { spawn } = require('child_process');
const config = require('../../config');
const path = require('path');

module.exports = {
    run: async (rtm, webClient, message) => {
        await rtm.sendMessage(`# Shutdown comand received`, message.channel);
        await rtm.sendMessage(`# Shutting down ...`, message.channel);
        ls = spawn(path.join(config.shell_script_folder, 'shutdown.sh'));
        ls.stderr.on('data', async data => {
            await rtm.sendMessage(`# Something wrong ${data}`, message.channel);
        });
    }
}