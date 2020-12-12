const Commando = require('discord.js-commando')

module.exports = class AnnCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ann',
      group: 'misc',
      memberName: 'ann',
      description: 'says what you say then pings',
      argsType: 'single',
      userPermissions: ['MANAGE_MESSAGES'],
    })
  }
  async run(message, args) {
    message.delete().then(() => {
var saytext = args;
        message.channel.send(`@everyone ${saytext}`)
         })
      }
    }