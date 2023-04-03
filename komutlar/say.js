const Discord = require("discord.js");//SentRise was here 

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("SentRise")
    .setColor('#70D7FF')
   .addField("** <a:discord:1016037111171924078> Toplam Kullanıcı**", message.guild.memberCount )//SentRise was here 
  
    .setTimestamp()
  return message.channel.send(üye);
};






module.exports.conf = {
  aliases: ["say"],
  permLevel: 0,
  enabled: true,
  guildOnly: true//SentRise was here 
};

module.exports.help = {
  name: "say",
  description: "",
  usage: ""
};