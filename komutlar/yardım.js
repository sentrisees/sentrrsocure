const categorylist = require("fs").readdirSync("./komutlar/").filter(s => s !== "private");
  for (const category of categorylist) {
const Discord = require('discord.js');
const { MessageButton } = require('discord-buttons');


exports.run = async (client, message, args) => {

  const kayıt2 = new MessageButton().setStyle('red').setLabel('Eğlence').setID('4')
const kayıt3 = new MessageButton().setStyle('grey').setLabel('Şu an Eğlence sayfasındasınız.').setID('5').setDisabled(true);
console.log("Yardım kullanıyolar", message.author.tag)
  let embed = new Discord.MessageEmbed()
  .setAuthor(`${client.user.username}`, client.user.avatarURL())
  .setColor('PURPLE')
.setTitle("<a:loading:1016003439450411088> Yardım menüsüne hoş geldin. Emrindeyim!")
  .setDescription(`<:2021_Snowsgiving_Emojis_001_Tree:921760128598962176> [Destek Sunucum](https://discord.gg/njPcWf8QPv)\n<:2021_Snowsgiving_Emojis_001_Tree:921760128598962176> [Beni sunucuna ekle](https://discord.com/api/oauth2/authorize?client_id=1015909809771515974&permissions=8&scope=applications.commands%20bot)`)
  .setThumbnail(message.author.avatarURL())
  .setImage("")
  message.reply(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Ana Menü').setID('1'), new MessageButton().setStyle('grey').setLabel('Yetkili').setID('2'), new MessageButton().setStyle('green').setLabel('Bot').setID('3'),  kayıt2]}).then(async function(helpMessage) {

    helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {



      if (button.id == '73') {
message.delete()
        message.delete().then(helpMessage.delete())

        button.reply.defer()

      }



        if (button.id == '1') {

        embed.setColor('PURPLE')
embed.setTitle("<a:loading:1016003439450411088> Yardım menüsüne hoş geldin. Emrindeyim!")
          embed.setDescription(`<:2021_Snowsgiving_Emojis_001_Tree:921760128598962176> [Destek Sunucum](https://discord.gg/njPcWf8QPv)\n<:2021_Snowsgiving_Emojis_001_Tree:921760128598962176> [Beni sunucuna ekle](https://discord.com/api/oauth2/authorize?client_id=1015909809771515974&permissions=8&scope=applications.commands%20bot)`)
  embed.setThumbnail(message.author.avatarURL())
  embed.setImage("")
  
  
 
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('grey').setLabel('Şuan Ana menüdesiniz.').setID('1').setDisabled(true), new MessageButton().setStyle('grey').setLabel('Yetkili').setID('2'), new MessageButton().setStyle('green').setLabel('Bot').setID('3'),  kayıt2]})

        button.reply.defer()

      } else if (button.id == '2') {
        embed.setColor(`#F9ADC9`)
        embed.setTitle('Yetkili (Moderasyon) Komutları')
        embed.setDescription(`<:tamir_1:921760123637104660>  s+ban\n<:tamir_1:921760123637104660> s+kick\n<:tamir_1:921760123637104660> s+gelen-giden\n<:tamir_1:921760123637104660> s+mute\n<:tamir_1:921760123637104660> s+sil\n<:tamir_1:921760123637104660> s+lock\n<:tamir_1:921760123637104660> s+güvenlik\n<:tamir_1:921760123637104660> s+güvenlik-sıfırla\n<:tamir_1:921760123637104660> s+unlock\n<:tamir_1:921760123637104660> s+unban\n<:tamir_1:921760123637104660> s+uyarı\n<:tamir_1:921760123637104660> s+forceban\n`)

        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Ana Menü').setID('1'), new MessageButton().setStyle('grey').setLabel('Şu an Yetkili sayfasındasınız.').setID('2').setDisabled(true), new MessageButton().setStyle('green').setLabel('Bot').setID('3'),  kayıt2]})

        button.reply.defer()

      } else if (button.id == '3') {

        embed.setTitle('Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.')
        embed.setColor('#F9ADC9')
        embed.setDescription(`<:link:921760129836286042>  s+avatar\n<:link:921760129836286042>  s+user\n<:link:921760129836286042>  s+sb\n<:link:921760129836286042>  s+say\n<:link:921760129836286042>  s+botbilgi\n<:link:921760129836286042>  s+yetklierim\n<:link:921760129836286042>  s+ping`)
 
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Ana Menü').setID('1'), new MessageButton().setStyle('grey').setLabel('Yetkili').setID('2'), new MessageButton().setStyle('grey').setLabel('Şu an Bot sayfasındasınız.').setID('3').setDisabled(true),  kayıt2]})

        button.reply.defer()
  
      } else if (button.id == '4') {

        embed.setTitle('Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.')
        embed.setColor('#F9ADC9')
        embed.setDescription(`<:2021_Snowsgiving_Emojis_001_Icon:921759552419012608>  s+atasözü\n<:2021_Snowsgiving_Emojis_001_Icon:921759552419012608>  s+ara155\n<:2021_Snowsgiving_Emojis_001_Icon:921759552419012608> s+balıktut\n<:2021_Snowsgiving_Emojis_001_Icon:921759552419012608>  s+kartopu\n<:2021_Snowsgiving_Emojis_001_Icon:921759552419012608>  s+tokat\n<:2021_Snowsgiving_Emojis_001_Icon:921759552419012608>  s+şekerye\n`)
 
        helpMessage.edit(embed, {buttons: [new MessageButton().setStyle('blurple').setLabel('Ana Menü').setID('1'), new MessageButton().setStyle('grey').setLabel('Yetkili').setID('2'), new MessageButton().setStyle('green').setLabel('Bot').setID('3'), kayıt3]})

        button.reply.defer()
      }
    });
  });
};
}

exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ['help', 'komutlar', 'yardim', "yardım", "<@1015909809771515974>", "sentrise"],
  permlevel: 0
}
exports.help = {
  name: 'yardım',
  description: 'sentrise pro yardım',
  usage: 'SR'
}