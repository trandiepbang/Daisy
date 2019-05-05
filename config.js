const path = require('path');
module.exports = {
    slack_token: process.env.SLACK_TOKEN || 'xoxb-104623026503-628579516070-9Q1zTdBhHv8BdEUVO1H0cw1h',
    shell_script_folder: process.env.SHELL_SCRIPT_FOLDER || path.join(__dirname, 'scripts/'),
    actions_folders: process.env.ACTIONS_FOLDER || path.join(__dirname, 'handlers/actions/')
}