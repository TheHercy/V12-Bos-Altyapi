const Discord = require("discord.js");
exports.run = async (client, message, args) => {

const hercy = new Discord.MessageEmbed()

.setDescription(`Pingim : ${client.ws.ping}`)
.setColor('RANDOM')
  
return message.channel.send(hercy)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun gecikmesini gösterir.',
  usage: 'ping'
}
