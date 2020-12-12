//stay-alive
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Uptimebot!'));

app.listen(port, () => console.log(`Example app listening at com.sun.net.httpserver.HttpServer:${port}`));
//bot-code
require('module-alias/register')
const config = require('./util/config.json')
const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const PREFIX = '^';
const prefix = PREFIX;
const Commando = require('discord.js-commando')
const client = new Commando.CommandoClient({
  owner: '737486185466691585',
  commandPrefix: '^',
  disableEveryone: true,
  unknownCommandResponse: false
})
//const Discord = require('discord.js')
//const client = new Discord.Client()
client.on('message', message => {

    if (message.author.bot) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();
    
    if (message.content.indexOf(config.prefix) !== 0) return;

    try {
        let commandFile = require(`./economy/${command}.js`);
        commandFile.run(client, message, args, config)
    } catch (err) {
        return;
    }



})
const insulter = require('insult');

console.log(insulter.Insult());

client.on('ready', async () => {
  let totalMembers = 0

    for (const guild of client.guilds.cache) {
      totalMembers += (await guild[1].members.fetch()).size
    }
  console.log('The client is ready!')
  client.user.setActivity(`^help - in ${client.guilds.cache.size} guilds - ${totalMembers} users - ${client.channels.cache.size} channels`,{
type: 'LISTENING'
  })
})
client.on('message', msg => {
if (msg === '<@761405928926478346>') {
msg.reply('our prefix is ^')
}
})
client.on('ready', async () => {
  console.log('The client is ready!')

  client.registry
    .registerGroups([
      ['misc', 'misc commands'],
      ['moderation', 'moderation commands'],
      ['economy', 'Commands for the economy system'],
      ['giveaway', 'Commands to manage giveaways'],
      ['games', 'commands for text besed games to play'],
      ['nsfw', 'commands for 18+ NSFW images'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'cmds'))
})

client.login(process.env.token)