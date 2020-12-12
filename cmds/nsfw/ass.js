const Commando = require('discord.js-commando');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');
module.exports = class NSFWCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'ass',
      group: 'nsfw',
      memberName: 'ass',
      description: 'Ass NSFW picture',
    })
  } 
run = async (message) => {
const image = await nsfw.ass();
const embed = new MessageEmbed()
  .setTitle(`Ass Image`)
  .setColor("GREEN")
  .setImage(image)
message.channel.send(embed)
    }
}