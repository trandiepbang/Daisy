const config = require('./config');
const commands = {};

module.exports =  {
    getActions: ()=> {
        require("fs").readdirSync(config.actions_folders).forEach(function(file) {
            commands[file] = require('./handlers/actions/'+file);
        });
        return commands;
    }
}
