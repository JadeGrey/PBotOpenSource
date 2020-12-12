const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args, config) => {



     
    let embed = new Discord.MessageEmbed()
    .setTitle(`${client.user.tag} Store!`)
    .setDescription('**Use +buy <item> to buy!**')
    .addField(`EpicGay`, '`700$`\nMakes you gay!')
    .addField(`FBI`, '`1800$`\nGet your door KICKED DOWN!') // can add up to 25(I believe)
    .setColor("RANDOM") 

    message.channel.send(embed)



}
