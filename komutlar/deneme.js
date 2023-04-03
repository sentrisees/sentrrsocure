const discord = require('discord.js');
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
    let buton1 = new MessageButton()
    .setStyle("green")
    .setLabel("Ana sayfa")
    .setID("butonid1");
    let buton2 = new MessageButton()
    .setStyle("red")
    .setLabel("Bot özel")
    .setID("butonid2");
    let buton3 = new MessageButton()
    .setStyle("green")
    .setLabel("Moderasyon")
    .setID("butonid3");
    let buton4 = new MessageButton()
    .setStyle("red")
    .setLabel("Eğlence")
    .setID("butonid4");

const embed = new discord.MessageEmbed()
    .setTitle(`SentRise Bot - Ana sayfa`)
    .setDescription("Butonlara tıklayarak komutlarımı öğrenebilirsin!")
    .setColor("BLUE")
    .setFooter("SentRise Bot")

    const embed1 = new discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `<:3446blurplecertifiedmoderator:1011662492684009583> Sunucu Komutları <:3446blurplecertifiedmoderator:1011662492684009583> `, value:`**Aşağıda genel komutlar bulunmaktadır**`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!avatar**`, value:`>>> Avatarınızı göstermenize yarar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **!atasözü**`, value:`>>> Atasözü söyler.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!ping**`, value:`>>> Botun gecikmesini gösterir.`, inline: false}
                )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
    const embed2 = new discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `<:yanok:1016035727622013048> **s!ban**`, value:`>>> Üye yasaklamanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!kick**`, value:`>>> Sunucudan üye atmanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!mute**`, value:`>>> Üye susturmanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!sil**`, value:`>>> Mesaj silmenizi sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!lock**`, value:`>>> Kanal kilitlemenizi sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!unlock**`, value:`>>> Kanalın kilidini açmanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!uyar**`, value:`>>> Üye uyarmanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s!forceban**`, value:`>>> Üye yasaklamanızı sağlar. (ID ban)`, inline: false}
                )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))
    const embed3 = new discord.MessageEmbed()
            .setTitle('Komutlar')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `🎃Eğlence Komutları🎃`, value:`**Aşağıda eğlence komutları bulunmaktadır**`, inline: false},
                {name: `🎃**!komut1**`, value:`>>> komut1 açıklama.`, inline: false},
                {name: `🎃**!komut2**`, value:`>>> komut2 açıklama.`, inline: false},
                {name: `🎃**!komut3**`, value:`>>> komut3 açıklama.`, inline: false}
                )
            .setTimestamp()
            .setFooter(`${message.author.tag} tarafından istendi.`, message.author.displayAvatarURL({dynamic: true}))

let msg = await message.channel.send({embed: embed , buttons: [ buton1, buton2, buton3, buton4 ]});
  
  client.on("clickButton", async button => {
    if (button.id == "butonid1") {
    msg.edit({ embed: embed })
}                                                               
    if (button.id == "butonid2") {
    msg.edit({ embed: embed1 })
}
   if (button.id == "butonid3") {
    msg.edit({ embed: embed2 })
}
   if (button.id == "butonid4") {
    msg.edit({ embed: embed3 })
}
 });
}
exports.conf = {
    enabled: true, //kullanıma açık mı değil mi
    guildOnly: true, //dmde kullanıma açık mı değil mi
    aliases: [], //kısayollar
    permLevel: 0 //perm level mainde karşıliklar yazar
  };
 
  exports.help = {
    name: "deneme", //komutu çalıştıracak olan kelime
    description: "",//açıklama (isteğe bağlı)
    usage: ""//kullanım (isteğe bağlı)
  };