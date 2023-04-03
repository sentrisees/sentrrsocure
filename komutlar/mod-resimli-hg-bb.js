const Discord = require('discord.js')
const db = require("quick.db")
const ee = require("../ayarlar.json")
let p = ee.prefix
exports.run = async (client, message, args) => {

        
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(` Bu Komutu Kullanabilmek İçin **Yönetici** İznine Sahip Olmalısın!`);

  if(args[0] === "ayarla"){
  let channel = message.mentions.channels.first()
    if (!channel) {
        message.channel.send(new Discord.MessageEmbed().setColor(ee.color).setDescription(` Yanlış Kullanım! Doğru Kullanım: s+hg-bb ayarla #kanal`))
    }
    
 db.set('rgiris_'+message.guild.id, channel.id) 
message.channel.send(new Discord.MessageEmbed().setColor(ee.color).setDescription(` Resimli Hoşgeldin - Güle Güle kanalı ${channel} Olarak Ayarlandı.`))
                     
} else {
  
if(args[0] === "sıfırla"){
message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`<a:sryes:1015942756776026174> Resimli Hoşgeldin, Güle Güle sistemi sıfırlanmıştır.`))
 db.delete('rgiris_'+message.guild.id)
  
} else {
   return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle(`SentRise Pro üyelik komutu`).setDescription(`Lütfen Değer Belirtin! Resimli Giriş Çıkış Sistemini Kurmak İçin: s+gelen-giden ayarla #kanal** Yazınız. Eğer Sıfırlamak İstiyorsanız: s+hg-bb sıfırla** Yazınız.`))
}}}    


      
  
exports.conf = {
    aliases: []
}

exports.help = {
    name: "gelen-giden",
}