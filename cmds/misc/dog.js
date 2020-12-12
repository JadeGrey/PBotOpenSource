const Commando = require('discord.js-commando')
const axios = require('axios')

module.exports = class DogCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'dog',
      group: 'misc',
      memberName: 'dog',
      description: 'Displays a random picture of a dog',
    })
  }

  run = async (message) => {
    axios
      .get('https://api.thedogapi.com/v1/images/search')
      .then((res) => {
        console.log('RES:', res.data[0].url)
        message.reply(res.data[0].url)
      })
      .catch((err) => {
        console.error('ERR:', err)
      })
  }
}