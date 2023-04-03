const Discord = require("discord.js"); 
const db = require('quick.db')
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {


  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.reply(" <a:srno:1015943126470361149> Yetersiz yetki!");
  let dcs_user = args[0];
  if (isNaN(dcs_user)) return message.reply(" <a:srno:1015943126470361149> Doğru ID girmelisiniz!");//SentRise was here 
  await message.guild.members.ban(dcs_user);



 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/DFHvN7A2wt")




  return message.reply(`<a:sryes:1015942756776026174> \`${dcs_user}\` Sunucudan yasaklanmıştır.`,{buttons:[buton1]});
    
      
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'forceban', 
  description: "",
  usage: ''
};