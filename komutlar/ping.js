const Discord = require('discord.js');
exports.run = async(client, message) => {



let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.addField("**__:satellite_orbital:  Gecikme Süresi__**", `**<a:loading:1016003439450411088> ${client.ws.ping}** ms Olarak Hesaplandı.`,true)
message.channel.send(embed)
}


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['p', 'ms'],
permLevel: 0
};

exports.help = {
name: 'ping',
description: 'Botun pingini gösterir',
usage: 'ping' };