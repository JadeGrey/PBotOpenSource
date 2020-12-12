const Commando = require('discord.js-commando')
const axios = require('axios')
const insulter = require('insult')
module.exports = class ICommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'insult',
      group: 'misc',
      memberName: 'insult',
      description: 'Displays an insult',
    })
  }
run = async (message) =>{
  message.channel.send(insulter.Insult())
}
   
  }
