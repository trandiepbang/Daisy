const { RTMClient } = require('@slack/rtm-api');
const { WebClient } = require('@slack/web-api');
const { messageHandler } = require('./handlers');
const config = require('./config');
const actionsLoader = require('./actionsLoader');
const rtm = new RTMClient(config.slack_token);
const web = new WebClient(config.slack_token);
let bot_user_id = null;

rtm.start()
  .catch(console.error);

rtm.on('ready',  async () => {
  const res = await web.auth.test();
  bot_user_id = res.user_id;
  console.log('Bot is online');
});

rtm.on('message', async (message) => {
  if (message.user === bot_user_id) return;
  messageHandler(rtm, web, message, actionsLoader.getActions())
}); 
