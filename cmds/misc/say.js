const Commando = require('discord.js-commando')

module.exports = class SayCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'say',
      group: 'misc',
      memberName: 'say',
      description: 'says what you say',
      argsType: 'single',
    })
  }
  async run(message, args) {
    message.delete().then(() => {
var saytext = args;
        message.channel.send(saytext)
         })
      }
    }