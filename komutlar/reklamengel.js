exports.run = (client, message) => {
        let db = require("quick.db")
        let Discord = require("discord.js")
  
    let reklam = db.fetch(`reklam.${message.guild.id}.durum`)//SentRise was here 
  const member3 = new Discord.MessageEmbed()
     .setColor(0x36393F)
.setDescription(`<a:srno:1015943126470361149> Yetkiniz bulunmamaktadır.`)
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(member3)
      if(reklam) {
      db.delete(`reklam.${message.guild.id}`)
      message.channel.send(`<a:sryes:1015942756776026174> Reklam engel **kapatılmıştır**. Bundan sonra reklam yapanların mesajları silinmeyecektir.`).then(l => {
      l.delete({timeout: 5000})
    })
    }else{
      db.set(`reklam.${message.guild.id}.durum`,true)//SentRise was here 
      message.channel.send(`<a:sryes:1015942756776026174> Reklam engel **açılmıştır**. Bundan sonra reklam yapanların mesajları silinecektir.`).then(l => {
      l.delete({timeout: 5000})
    })
    }
    }

 exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["reklam-engel"],//SentRise was here 
  permLevel: 0
};

exports.help = {
  name: 'reklamengel',
  description: "",
  usage: ''
}
