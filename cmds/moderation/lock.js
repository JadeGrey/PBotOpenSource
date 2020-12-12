const Commando = require('discord.js-commando')

module.exports = class LockCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'lock',
      group: 'moderation',
      memberName: 'lock',
      description: 'doesnt allow everyone to send messasges',
      clientPermissions: ['MANAGE_CHANNELS'],
      userPermissions: ['MANAGE_CHANNELS'],
      
    })
  }


  run(message) {
message.channel.overwritePermissions({ 'SEND_MESSAGES': false })
   }
  }