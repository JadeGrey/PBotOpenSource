const Commando = require('discord.js-commando')

module.exports = class NukeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'purge',
      group: 'moderation',
      memberName: 'purge',
      description: 'deletes up to 100 messages in a channel',
      clientPermissions: ['MANAGE_MESSAGES'],
      userPermissions: ['MANAGE_MESSAGES'],
      argsType: 'single',
      args: [
        {
            key: 'text',
            prompt: 'please specify the message count',
            type: 'integer'
        }
    ]

    })
  }


  run(msg, {text}) {
const deleteCount = parseInt(text);
msg.channel.bulkDelete(deleteCount)
  .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
  .catch(console.error);

    }
  }