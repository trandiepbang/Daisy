const path = require('path');
module.exports = {
    notify_connection_status: (process.env.NOTIFY_CONNECTION_STATUS === 'true') || true,
    slack_token: process.env.SLACK_TOKEN || 'xoxb-slack-token',
    slack_log_channel: process.env.SLACK_LOG_CHANNNEL || 'CJEJD8AMB',
    shell_script_folder: process.env.SHELL_SCRIPT_FOLDER || path.join(__dirname, 'scripts/'),
    actions_folders: process.env.ACTIONS_FOLDER || path.join(__dirname, 'handlers/actions/')
}