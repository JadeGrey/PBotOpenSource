const Commando = require('discord.js-commando');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');
module.exports = class NSFWCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'anal',
      group: 'nsfw',
      memberName: 'anal',
      description: 'Anal NSFW picture',
    })
  } 
run = async (message) => {
const image = await nsfw.anal();
const embed = new MessageEmbed()
  .setTitle(`Anal Image`)
  .setColor("GREEN")
  .setImage(image)
message.channel.send(embed)
    }
}