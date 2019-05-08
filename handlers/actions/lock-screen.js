const { spawn } = require('child_process');
const config = require('../../config');
const path = require('path');

module.exports = {
    run: async (rtm, _, message) => {
        await rtm.sendMessage(`# Lock down comand received`, message.channel);
        await rtm.sendMessage(`# Executing ...`, message.channel);
        ls = spawn(path.join(config.shell_script_folder, 'lock-screen.sh'));
        ls.on('close', async () => {
            await rtm.sendMessage(`# Locked down ...`, message.channel);
        });
    }
}