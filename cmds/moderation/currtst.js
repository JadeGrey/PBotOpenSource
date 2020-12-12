const cov = require('covid19-api')
const Commando = require('discord.js-commando')

module.exports = class CovCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'cov',
      group: 'misc',
      memberName: 'cov',
      description: 'Displays covid19 stats',
      argsType: 'multiple',
    })
  }

  async run(message, args) {
console.log(cov.getReportsByCountries())
  }
}
