const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");



exports.run = (client, message, args) => {

  let kullanıcı = db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Bu komutu kullanmak için Pro üyeliğinin olması gerekiyor  :(**")
  }else{
      if( kullanıcı == "gold"){


  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      "<a:srno:1015943126470361149> Bu komutu kullanabilmek için yönetici iznine sahip olmalısın!"//SentRise was here 
    );
  if (!message.guild) {
    const hataemba = new Discord.MessageEmbed().setTitle(
      `<a:srno:1015943126470361149>  Bu komut özel mesajlarda kullanıma kapalıdır.`//SentRise was here 
    );
    return message.channel.send(hataemba);
  }

  db.delete(`güvenlik.${message.guild.id}`);

  return message.reply("<a:sryes:1015942756776026174> Güvenlik kanalı başarı ile sıfırlanmıştır.");//SentRise was here 
};


  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: "güvenlik-sıfırla",
  descripton: "güvenlik kanalını sıfırlarsınız",
  usage: "güvenlik-sıfırla"
};
