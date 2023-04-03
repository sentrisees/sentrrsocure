const Discord = require("discord.js");
const db = require("quick.db");

exports.run = (client, message, args) => {

  let kullanıcı = db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Bu komutu kullanmak için Pro üyeliğinin olması gerekiyor  :(**")
  }else{
      if( kullanıcı == "gold"){

  if (!message.member.hasPermission("ADMINISTRATOR"))//SentRise was here 
    return message.reply(
      "<a:srno:1015943126470361149> Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın'"
    );

  let chanel = message.mentions.channels.first();
  if (!chanel)
    return message.reply(
      "<a:srno:1015943126470361149> Lütfen güvenlik mesajlarının gideceği kanalı etiketle"//SentRise was here 
    );

  db.set(`güvenlik.${message.guild.id}`, chanel.id);
  const basari = new Discord.MessageEmbed().setDescription(
    `<a:sryes:1015942756776026174> Güvenlik kanalı başarıyla ${chanel} olarak ayarlandı`
  );
  return message.channel.send(basari);
};
     
   }
      
  }


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],//SentRise was here 
  permlevel: 4
};

exports.help = {
  name: "güvenlik",
  description: "Yeni hesap açan kullanıcıları belirlediğiniz kanala atar.",
  usage: "güvenlik #kanal"
};
