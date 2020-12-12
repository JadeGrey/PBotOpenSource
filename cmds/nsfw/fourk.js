const Commando = require('discord.js-commando');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');
module.exports = class CatCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: '4k',
      group: 'nsfw',
      memberName: '4k',
      description: '4k NSFW picture',
    })
  } 
run = async (message) => {
const image = await nsfw.fourk();
const embed = new MessageEmbed()
  .setTitle(`4k Image`)
  .setColor("GREEN")
  .setImage(image)
message.channel.send(embed)
    }
}