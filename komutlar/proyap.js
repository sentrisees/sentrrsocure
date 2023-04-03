const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`gold_${nesne}`, 'gold')
  
  message.channel.send(`**${nesne}** IDli kullanıcı artık SentRise'nin tüm avantajlarına erişebilir!`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["pv"],
  permLevel: 4
};
exports.help = {
  name: 'pro üyelik ver',
  description: '[Admin Komutu]',
  usage: 'karaliste ID'
};