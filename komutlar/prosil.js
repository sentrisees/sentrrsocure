const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.delete(`gold_${nesne}`)
  
  message.channel.send(`**${nesne}** IDli kullanıcının pro üyeliği Kurucum tarafından alındı!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pd"],
  permLevel: 4
};
exports.help = {
  name: 'pro üyelik çıkart',
  description: '[Admin Komutu]',
  usage: 'karaliste ID'
};