const Commando = require('discord.js-commando');
const NSFW = require('discord-nsfw');
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');
module.exports = class NSFWCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: 'hentai',
      group: 'nsfw',
      memberName: 'hentai',
      description: 'hentai NSFW picture',
    })
  } 
run = async (message) => {
const image = await nsfw.hentai();
const embed = new MessageEmbed()
  .setTitle(`Hentai Image`)
  .setColor("BLUE")
  .setImage(image)
message.channel.send(embed)
    }
}