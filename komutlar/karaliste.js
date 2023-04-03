const db = require('croxydb')
const Discord = require('discord.js')
const client = new Discord.Client();
exports.run = async (bot, message, args) => {
   const kl = require('croxydb')
          const i = await kl.fetch(`kara_${message.channel.id}`); // \\
    if (i == 'kara') return message.reply("Malesef Sen Karalistedesin Ve Komutları Kullanamassın ")
 
  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
  
  db.set(`kara_${nesne}`, 'kara')
  
  message.channel.send(`**${nesne}** ID'li kullanıcı karalisteye alınmıştır.`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["karaliste"],
  permLevel: 4
};
exports.help = {
  name: 'karalist',
  description: '[Admin Komutu]',
  usage: 'karaliste ID'
};