const Commando = require('discord.js-commando');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');
module.exports = class CatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'nekofeet',
      group: 'nsfw',
      memberName: 'nekofeet',
      description: 'neko feet NSFW picture',
    })
  } 
run = async (message) => {
const image = await nsfw.nekofeet();
const embed = new MessageEmbed()
  .setTitle(`Neko Feet Image`)
  .setColor("GREEN")
  .setImage(image)
message.channel.send(embed)
    }
}