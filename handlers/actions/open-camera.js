const {
    spawn
} = require('child_process');
const fs = require('fs');
const config = require('../../config');
const path = require('path');

module.exports = {
    run: async (rtm, webClient, message) => {
        await rtm.sendMessage(`# Open camera comand received`, message.channel);
        await rtm.sendMessage(`# Executing ...`, message.channel);
        const image_folder = '/tmp/camera.jpeg';
        ls = spawn(path.join(config.shell_script_folder, 'open-camera.sh'), [image_folder]);
        ls.on('close', async () => {
            console.log('#upload to to slack');
            webClient.files.upload({
                channels: message.channel,
                file: fs.createReadStream(image_folder)
            });
        });
    }
}