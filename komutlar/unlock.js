const Discord = require("discord.js");
const { MessageButton } = require("discord-buttons");

exports.run = (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(` Bu Komutu Kullanabilmek İçin **Mesajları Yönet** İznine Sahip Olmalısın!`);


  let every = message.guild.roles.cache.find(r => r.name === "@everyone");//SentRise was here 
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });


 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/QE7p8bt4Hk")

  const Embed = new Discord.MessageEmbed()
      .setColor("#00ff00")
.setFooter("SentRise Pro")
  .setDescription("<a:sryes:1015942756776026174> Sohbet kanalı **Yazılabilir** duruma getirildi.");//SentRise was here 

let msg = message.channel.send({embed: Embed , buttons: [ buton1 ]});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],//SentRise was here 
  kategori: "sohbet",
  permLevel: 3
};

exports.help = {
  name: "unlock",
  description: "kapat ac",
  usage: "prefix + sohbet-aç"//SentRise was here 
};
