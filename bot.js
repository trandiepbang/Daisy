require('dotenv').config({ path: __dirname + '/.env' });

const { RTMClient } = require('@slack/rtm-api');
const { WebClient } = require('@slack/web-api');
const { messageHandler } = require('./handlers');
const config = require('./config');
const os = require('os');
const actionsLoader = require('./actionsLoader');
const rtm = new RTMClient(config.slack_token);
const web = new WebClient(config.slack_token);
let bot_user_id = null;

rtm.start()
  .catch(console.error);

console.log(`# Slack token is : ${config.slack_token}`);
rtm.on('ready',  async () => {
  const res = await web.auth.test();
  bot_user_id = res.user_id;
  console.log(`# Bot is online`);
  console.log('# Waiting for your commands');

  if (config.notify_connection_status && config.slack_log_channel) {
    rtm.sendMessage(`# Laptop ${os.hostname()} has successfully connnected`, config.slack_log_channel);
  }
});

rtm.on('goodbye', async () => {
  if (config.notify_connection_status && config.slack_log_channel) {
    rtm.sendMessage(`# Laptop ${os.hostname()} has disconnected`, config.slack_log_channel);
  }
});

rtm.on('message', async (message) => {
  if (message.user === bot_user_id) return;
  return messageHandler(rtm, web, message, actionsLoader.getActions())
});
