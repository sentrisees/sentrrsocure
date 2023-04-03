const Discord = require("discord.js");
const client = new Discord.Client();//SentRise
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");//SentRise
require('moment-duration-format');
const os = require('os');//SentRise
const Jimp = require("jimp");
const request = require('node-superfetch');
const db = require("quick.db");
const canvas = require("canvas");//insta: çıtır_civciv


///////////////////////READY\\\\\\\\\\\\\\\\\\\\\ HTTP UPTIME

const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//////////////////

var prefix = ayarlar.prefix;

client.on('ready', async () => {
  client.user.setPresence({ activity: { name: "SentRise Pro | s+yardım", type: "PLAYING" }, status: "online" })
  .then(console.log(`${client.user.tag} Discord Bağlantısını kurdu.`))//SentRise
});

client.on("ready", () => {
  console.log(`${client.user.tag}Artık aktif!`);//SentRise
  console.log("Bot Başarı İle Aktif Oldu.")
//
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);//SentRise
};
//SentRise
///////////////////////READY BİTİŞ\\\\\\\\\\\\\\\\\\\\\

//SentRise was here :)

//////////////KOMUT YÜKLEYİCİ\\\\\\\\\\\\\\\\\\\\\


require("./util/eventLoader")(client);

client.login(process.env.token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();//SentRise
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);//SentRise
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];//SentRise
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });//SentRise
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();//SentRise
    } catch (e) {
      reject(e);//SentRise
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {//SentRise
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }//SentRise
  });
};
//SentRise
client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {//SentRise
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }//SentRise
  });
};//SentRise

client.elevation = message => {
  if (!message.guild) {//SentRise
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;//SentRise
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
//SentRise
client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));//SentRise
});//SentRise
//SentRise
client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});//SentRise

module.exports = message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  
  if (!client.commands.has(command)) {
    if (client.aliases.has(command)) {
      cmd = client.commands.get(client.aliases.get(command));
    } else {
      message.channel.send(`Komutlarımda \`\`${command}\`\` adında bir komut bulamadım! Komut listesine bakmak için: \`\`${ayarlar.prefix}yardım\`\``)
    }
  }
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }

};

/////////////////////////KOMUT YÜKLEYİCİ SON \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//SentRise was here :)

//////////////////////////////KOMUTLAR \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//yardım menüsü başlangıç
const buttons = require('discord-buttons');
buttons(client)

client.on("message", async message => {
    if (message.content === "s!yradımyedek531245" && message.author.id === ayarlar.sahip) {

        const one = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("Kullanıcı")
            .setID("one");

        const two = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("Moderasyon")
            .setID("two");

        const three = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("Koruma")
            .setID("three");

        const four = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("Çekiliş")
            .setID("four");

        
       const five = new buttons.MessageButton()
            .setStyle("gray")
            .setLabel("Bot")
            .setID("five");
      
        message.channel.send("** <a:892143753106706432:911727655441813526> Merhaba!** \n\n Aşşağıdaki butonlarla tıklayarak **Komutlarımı öğrenebilirsin!**", { buttons: [one, two, three, four, five] })
    }
})
 
      client.on('clickButton', async (button) => {
      
        if (button.id === "one") {
        const taglı = button.guild.members.cache.filter(r => r.user.username.includes(ayarlar.tag)).size
        await button.reply.think(true);
        await button.reply.edit(`Kullanıcı komutları\n\n s!say = **Sunucudaki toplam kullanıcıyı sayar.**\n s!sunucu-bilgi = **Sunucu hakkında bilgi verir.**\n s!test = **Bir çeşit test komutu, botun çalışırlığından emin olmanıza yarar.**\n s!yetkilerim = **Yetkilerinizi kontor eder.**`);
    };

    if (button.id === "two") {
    const ses = button.guild.channels.cache.filter(channel => channel.type == 'voice').map(channel => channel.members.size).reduce((a,b) => a + b)
        await button.reply.think(true)
        await button.reply.edit(`Moderasyon komutları\n\n s!ban = **Sunucudan kullanıcı yasaklar.**\n s!forceban = **ID ban atmanıza yardımcı olur.**\n s!kick = **Sunucudan kullanıcı atar.**\n s!sil = **Mesaj siler.**\n s!unban = **Yasaklı bir şahısın banını açar.**\n s!uyar = **Bir kişiyi uyarır.**`)
    };

    if (button.id === "three") {
     const toplam = button.guild.memberCount
        await button.reply.think(true);
        await button.reply.edit(`Koruma komutları\n\n s!reklamengel = **Sunucunuzda reklam yapılmasını engeller.**`)
    };

    if (button.id === "four") {
        await button.reply.think(true);
        await button.reply.edit(`Dur yazıyom komutlayııı.`);
    };
 if (button.id === "five") {
      const member = button.guild.joinedAt
        await button.reply.think(true);
        await button.reply.edit(`Dur yazıyom komutlayııı.`)
    }

      }
                );

////////////////yardım menüsü bitiş


//SentRise


  ////////butonlu rol al - ver başlangıç

    client.on("message", async msg => {
    if (msg.content === "s!butonlar" && msg.author.id === ayarlar.sahip) {
      
      const button1 = new buttons.MessageButton()
            .setStyle("green")
            .setLabel("Etkinlik Katılımcısı")
            .setID("button1");
      
      const button2 = new buttons.MessageButton()
            .setStyle("red")
            .setLabel("Çekiliş Katılımcısı")
            .setID("button2");
      
      msg.channel.send(`
        
        **Merhaba \`${ayarlar.sunucuismi}\` Üyeleri!**
 
🎉 **• Çekiliş Katılımcısı alarak, sunucumuzda olucak çekilişlerden anında haber alabilirsiniz..**

🎁 **• Etkinlik Katılımcısı alarak, oyunlarımızdan, ve etkinliklerimizden faydalanabilirsiniz.**


        
        
        
        
        
        `,{ buttons: [button1, button2] })
      
      client.on('clickButton', async (button) => {
        //SentRise
        if (button.id === 'button1') {
        if (button.clicker.member.roles.cache.get((ayarlar.etkinlik))) {
            await button.clicker.member.roles.remove((ayarlar.etkinlik))//SentRise
            await button.reply.think(true);
            await button.reply.edit(`✅ | **Etkinlik Katılımcısı (<@&${ayarlar.etkinlik}>) rolünü senden aldım!**`)
        } else {
            await button.clicker.member.roles.add(((ayarlar.etkinlik)))
            await button.reply.think(true);
            await button.reply.edit(`✅ | **Etkinlik Katılımcısı (<@&${ayarlar.etkinlik}>) rolünü sana verdim!**`)
        }
    }
        
             if (button.id === 'button2') {
        if (button.clicker.member.roles.cache.get((ayarlar.çekiliş))) {
            await button.clicker.member.roles.remove((ayarlar.çekiliş))//SentRise
            await button.reply.think(true);
            await button.reply.edit(`✅ | **Çekiliş Katılımcısı (<@&${ayarlar.çekiliş}>) rolünü senden aldım!**`)
        } else {
            await button.clicker.member.roles.add(((ayarlar.çekiliş)))
            await button.reply.think(true);
            await button.reply.edit(`✅ | **Çekiliş Katılımcısı (<@&${ayarlar.çekiliş}>) rolünü sana verdim!**`)
        }
    }
      
      })//SentRise
    }
    })
////////butonlu rol bitiş

//SentRise

//sunucu rehberi başlangıç
client.on("message", async message => {
    if (message.content === "s+sdawd" && message.author.id === ayarlar.sahip) {//SentRise

        const bir = new buttons.MessageButton()
            .setStyle("red")//SentRise
            .setLabel("1")
            .setID("bir");
      
      const iki = new buttons.MessageButton()
            .setStyle("green")//SentRise
            .setLabel("2")
            .setID("iki");//SentRise
      
      const üç = new buttons.MessageButton()//SentRise
            .setStyle("red")
            .setLabel("3")//SentRise
            .setID("üç");
      
      const dört = new buttons.MessageButton()//SentRise
            .setStyle("green")
            .setLabel("4")//SentRise
            .setID("dört");
      
      const beş = new buttons.MessageButton()//SentRise
            .setStyle("red")
            .setLabel("5")
            .setID("beş");//SentRise


        message.channel.send("**Merhaba! Sunucu rehberine hoş geldin!** \n\n Aşşağıdaki butonlarla tıklayarak **sunucumuz hakkında bilgi alabilirsiniz** \n\n **1 ** `Sunucumuzda kaç bot olduğunu kontrol edersiniz.` \n **2 ** `Sunucumuzda kaç tane yazılı kanal olduğunu kontrol edersiniz.` \n **3 ** `Sunucumuzda kaç tane sesli kanal olduğunu kontrol edersiniz.` \n **4** `Sunucumuzda kaç tane katagori olduğunu kontrol edersiniz` \n **5 ** `Sunucunun sahibi kim olduğunu kontrol edersiniz.`", { buttons: [bir, iki, üç, dört, beş] })
    }
})
      client.on('clickButton', async (button) => {
      
        if (button.id === "bir") {
         let botCount = button.guild.members.cache.filter(m => m.user.bot).size;
        await button.reply.think(true);
        await button.reply.edit(`Sunucumuzda Toplam **${botCount}** Bot Bulunmakta!`);//SentRise
    };
         if (button.id === "iki") {
        await button.reply.think(true);//SentRise
        await button.reply.edit(`Sunucumuzda Toplam **${button.guild.channels.cache.filter(c => c.type === 'text').size}** Yazılı Kanal Bulunmakta!`);
    };
           if (button.id === "üç") {
        await button.reply.think(true);
        await button.reply.edit(`Sunucumuzda Toplam **${button.guild.channels.cache.filter(c => c.type === 'voice').size}** Sesli Kanal Bulunmakta!`);
    };
                if (button.id === "dört") {//SentRise
        await button.reply.think(true);
        await button.reply.edit(`Sunucumuzda Toplam **${button.guild.channels.cache.filter(c => c.type === 'category').size}** Katagori Bulunmakta!`);
    };
                  if (button.id === "beş") {
        await button.reply.think(true);
        await button.reply.edit(`Sunucumuzda Tacın Sahibi : **${button.guild.owner}** `);//SentRise
    };

  
      }
                );

//////sunucu rehberi son


//SentRise


//profil başlangıç
exports.run = async(client, message, args) => {//SentRise

  if(message.channel.type == "dm")  return;
  if(message.channel.type !== "text") return;

  var user = message.mentions.users.first() || message.client.users.cache.get(args[0]) || message.client.users.cache.find(m => m.username === args.slice(0).join(" ")) || message.author; message.author;
  const member = message.guild.member(user)
  let kisi = client.users.cache.get(member.id);//SentRise

moment.locale('tr-TR');
      var userRoles
        if (member.roles.size > 1) {
            userRoles = `${member.roles.array().sort((a, b) => a.comparePositionTo(b)).slice(1).reverse().map(role => `**\`${role.name}\`**`)}`
          } else {
            userRoles = '`Bulunmuyor`'
              }
              
  function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " gün" : " gün") + " önce";//SentRise
        };

  if (!member) return message.reply('Bir kullanıcı belirt = s!user @lutex')

        let serverSize = message.guild.memberCount;

  const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.avatarURL() || user.defaultavatarURL())
      .setThumbnail(user.avatarURL() || user.defaultavatarURL())
      .setColor(member.displayHexColor === '#000000' ? '#ffffff' : member.displayHexColor)
      .addField('Üye bilgisi:',`**Kullanıcı İsmi:** ${member.displayName}\n**Katılım Tarihi:** ${moment.utc(member.joinedAt).format('Do MMMM YYYY')} - ${checkDays(member.joinedAt)} \n**Rolleri:** ${member.roles.cache.sort((b, a) => { return a.position - b.position }).map(role => `${role}`).join(" | ")}`, false)        .addField('Kullanıcı bilgisi:',  `\n**Tag**: ${member.user.tag}\n**ID:** ${member.user.id}\n**Kuruluş Tarihi**: ${moment.utc(user.createdAt).format('Do MMMM YYYY')} - ${checkDays(user.createdAt)}`, false)
      .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.avatarURL())
      .setTimestamp()
     return message.channel.send(embed)//SentRise
                                
        }

exports.conf = {
  aliases: ['profilim','kullanıcıbilgi','profil','kullanıcı bilgi','kb','bilgi'],//SentRise
  permLevel: 0,
  kategori: 'Genel'//SentRise
};

exports.help = {
  name: 'kullanıcı-bilgi',
  description: 'Kullanıcı hakkında bilgi verir.',
  usage: 'kullanıcı-bilgi @Kullanıcı',//SentRise

};
/////////profil son


//SentRise


//sadece resim başlangıç
client.on("message", m => {
  if (m.channel.id !== "1017160890434469968") { //SentRise
    return;
  }
  if (m.author.id === m.guild.ownerID && client.user.id) return;
  if (m.attachments.size < 1) {
    m.delete()
  }
});
//sadece resim son


//SentRise


////sunucuya eklendim log başlangıç

client.on('guildCreate', guild => {
let ekleme = new Discord.MessageEmbed()

.setColor("GREEN")

.setTitle(" Bir Sunucuya Eklendim! ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi",`<@${guild.ownerID}>`)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

  client.channels.cache.get('1017180389682462771').send(ekleme);
});

///////sunucuya eklendim log son



//SentRise



////reklam engel başlangıç


const reklam = [
  ".com",
  ".net",
  ".xyz",
  ".tk",
  ".pw",
  ".io",
  ".me",
  ".gg",
  "www.",
  "https",
  "http",
  ".gl",
  ".org",
  ".com.tr",
  ".biz",
  "net",
  ".rf",
  ".gd",
  ".az",
  ".party",
".gf"
];
client.on("messageUpdate", async (old, nev) => {

if (old.content != nev.content) {
let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);
if (i) {

if (reklam.some(word => nev.content.includes(word))) {//SENTRISE YÖNETİM BOTU
if (nev.member.hasPermission("BAN_MEMBERS")) return ;
 //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;//SENTRISE YÖNETİM BOTU
const embed = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${nev.author} , **Mesajını editleyerek reklam yapmaya çalıştı!**`)//SENTRISE YÖNETİM BOTU
      .addField("Mesajı:",nev)
  
      nev.delete();
      const embeds = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${nev.author} , **Mesajı editleyerek reklam yapamana izin veremem!**`) //SENTRISE YÖNETİM BOTU
    client.channels.cache.get(y).send(embed)
      nev.channel.send(embeds).then(msg => msg.delete({timeout:5000}));//SENTRISE YÖNETİM BOTU
    
}
} else {
}
if (!i) return;//SENTRISE YÖNETİM BOTU
}
});

client.on("message", async msg => {//SENTRISE YÖNETİM BOTU


if(msg.author.bot) return;
if(msg.channel.type === "dm") return;
   let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);
//SENTRISE YÖNETİM BOTU
let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
    if (i) {
        if (reklam.some(word => msg.content.toLowerCase().includes(word))) {//SENTRISE YÖNETİM BOTU
          try {
           if (!msg.member.hasPermission("MANAGE_GUILD")) {
           //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
msg.delete({timeout:750});
              const embeds = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` <@${msg.author.id}> , **Bu sunucuda reklam yasaktır. Kurallara birdaha göz atınız.**`)
msg.channel.send(embeds).then(msg => msg.delete({timeout: 5000}));
          const embed = new Discord.MessageEmbed() .setColor(0x36393F) .setDescription(` ${msg.author} , **Reklam yapmaya çalıştı!**`) .addField("Mesajı:",msg)
         client.channels.cache.get(y).send(embed)//SENTRISE YÖNETİM BOTU
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
   if(!i) return ;
});
////////////reklam engel son




//SentRise




/////////////Mute Sistemi Başlangıç - SentRise

client.on("ready", async () => {
  setInterval(() => {
    let datalar = db.all().filter(data => data.ID.startsWith("mute_"));

    if (datalar.size < 0) return;//SENTRISE YÖNETİM BOTU

    datalar.forEach(datacık => {
      let kullanıcı = datacık.ID.replace("mute_", "");//SENTRISE YÖNETİM BOTU
      let data = db.fetch(`mute_${kullanıcı}`);

      let süre = data.ms - (Date.now() - data.başlangıç);//SENTRISE YÖNETİM BOTU

      let sunucu = client.guilds.cache.get(data.sunucu);
      let member = sunucu.members.cache.get(kullanıcı);//SENTRISE YÖNETİM BOTU
      let kanal = sunucu.channels.cache.get(data.kanal);
      let sebep = data.sebep;
      let moderator = client.users.cache.get(data.moderator);//SENTRISE YÖNETİM BOTU
      let mute_rol = sunucu.roles.cache.find(
        rol =>
          rol.name.toLowerCase().includes("susturuldu") ||//SENTRISE YÖNETİM BOTU
          rol.name.toLowerCase().includes("muted")
      );

      if (!member) {
        let hata = new Discord.MessageEmbed()//SENTRISE YÖNETİM BOTU
          .setTitle("Mute Devam Edemedi!")
          .setDescription(
            "**" +
              kullanıcı +
              "** ID'ye sahip; **" +
              moderator.username +
              "** Tarafından mutelenen kullanıcı **" +
              sunucu.name +
              "** Sunucusundan ayrılmış!"
          )//SENTRISE YÖNETİM BOTU
          .setColor("RED");
        kanal.send("<@!" + moderator.id + ">", hata);
        db.delete(datacık.ID);

        return;
      }

      if (süre > 0) return;

      let bitti = new Discord.MessageEmbed()
        .setTitle("🔓 Mute Kaldırıldı!")
        .setDescription(
          "Aşağıdaki kullanıcıya ait mute; **Süresi Dolduğu** için sonlandırıldı!"
        )
        .addField("\u200b", "\u200b")
        .addField(
          "🔱 __KULLANICI__ 🔱",
          "» Kullanıcı: **" +//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
            member.user.username +
            "**\n» Mute Sebebi: **" +
            sebep +
            "**\n» ID: **" +//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
            member.user.id +
            "**"
        )
        .addField("\u200b", "\u200b")//SENTRISE YÖNETİM BOTU
        .addField(
          "⚜️ __YETKİLİ__ ⚜️",//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
          "» Yetkili: **" +
            moderator.username +
            "**\n» ID: **" +//SENTRISE YÖNETİM BOTU
            moderator.id +
            "**"
        )
        .setColor("GREEN");//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
      kanal.send(
        "<@!" + member.user.id + "> , <@!" + moderator.id + ">",
        bitti
      );
//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
      member.roles.remove(mute_rol);
      db.delete(datacık.ID);//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
    });
  }, 5000);
});
////Mute Sistemi Son//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU


//SentRise


//////////////////güvenlik başlangıç
client.on("guildMemberAdd", member => {
  let kanal = db.fetch(`güvenlik.${member.guild.id}`);
  if (!kanal) return;

  let aylar = {
    "01": "Ocak",
    "02": "Şubat",//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
    "03": "Mart",
    "04": "Nisan",
    "05": "Mayıs",
    "06": "Haziran",//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
    "07": "Temmuz",
    "08": "Ağustos",
    "09": "Eylül",//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU
    "10": "Ekim",
    "11": "Kasım",
    "12": "Aralık"//SENTRISE YÖNETİM BOTU
  };

  let bitiş = member.user.createdAt;
  let günü = moment(new Date(bitiş).toISOString()).format("DD");
  let ayı = moment(new Date(bitiş).toISOString())
    .format("MM")
    .replace("01", "Ocak")
    .replace("02", "Şubat")
    .replace("03", "Mart")
    .replace("04", "Nisan")//SENTRISE YÖNETİM BOTU
    .replace("05", "Mayıs")
    .replace("06", "Haziran")
    .replace("07", "Temmuz")
    .replace("08", "Ağustos")//SENTRISE YÖNETİM BOTU
    .replace("09", "Eylül")
    .replace("10", "Ekim")//SENTRISE YÖNETİM BOTU
    .replace("11", "Kasım")
    .replace("12", "Aralık")
    .replace("13", "sntrs");
  let yılı = moment(new Date(bitiş).toISOString()).format("YYYY");//SENTRISE YÖNETİM BOTU
  let saati = moment(new Date(bitiş).toISOString()).format("HH:mm");

  let günay = `${günü} ${ayı} ${yılı} ${saati}`;

  let süre = member.user.createdAt;
  let gün = moment(new Date(süre).toISOString()).format("DD");
  let hafta = moment(new Date(süre).toISOString()).format("WW");
  let ay = moment(new Date(süre).toISOString()).format("MM");
  let ayy = moment(new Date(süre).toISOString()).format("MM");//SENTRISE YÖNETİM BOTU
  let yıl = moment(new Date(süre).toISOString()).format("YYYY");
  let yıl2 = moment(new Date().toISOString()).format("YYYY");

  let netyıl = yıl2 - yıl;

  let created = ` ${netyıl} yıl  ${ay} ay ${hafta} hafta ${gün} gün önce`;//SENTRISE YÖNETİM BOTU

  let kontrol;
  if (süre < 1296000000)
    kontrol = "`Bu hesap şüpheli!` ⛔️";
  if (süre > 1296000000)
    kontrol = "`Bu hesap güvenli!` ✅";

  let snt = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setTitle(`${member.user.username} Katıldı`)//SENTRISE YÖNETİM BOTU
    .setDescription(
      "<@" +
        member.id +
        "> Bilgileri 🔸 \n\n  __Hesap Oluşturulma Tarihi__ 🔸 \n\n**[" +
        created +
        "]** (`" +
        günay +
        "`) \n\n __Hesap durumu__ 🔸 \n\n**" +
        kontrol +
        "**"
    );
  client.channels.cache.get(kanal).send(snt);
});
/////////güvenlik son



////////////////////KOMUTLAR BAŞLANGIÇ

const { MessageButton } = require("discord-buttons");
client.on('message', async (message) => {
    if (message.content.startsWith(`s+6423yfsgs`)) {
            
        let bot = new MessageButton()
        .setStyle('grey')//SENTRISE YÖNETİM BOTU
        .setLabel("Bot")
        .setID('bot') //SENTRISE YÖNETİM BOTU
        
        let eğlence = new MessageButton()//SENTRISE YÖNETİM BOTU 
        .setStyle('red')
        .setLabel("Eğlence")
        .setID('eğlence') //SENTRISE YÖNETİM BOTU

        let yetkili = new MessageButton()
        .setStyle('grey')
        .setLabel("Yetkili ")
        .setID('yetkili') //SENTRISE YÖNETİM BOTU
                
        let button3 = new MessageButton()//SENTRISE YÖNETİM BOTU
        .setStyle('green')
        .setLabel("Ana Menü")//SENTRISE YÖNETİM BOTU
        .setID('anamenü') 
                

        message.channel.send('', {
            embed: new Discord.MessageEmbed()
          .setAuthor(ayarlar.botisim, client.user.avatarURL())//SENTRISE YÖNETİM BOTU
          .setColor(`BLUE`)  
          .setTitle("<a:loading:1016003439450411088> Butonlarımı kullanarak komutlarıma erişebilirsin.")//SENTRISE YÖNETİM BOTU
          .setFooter("SentRise Pro - 2022")
          .setDescription(`<:yanok:1016035727622013048> [Destek Sunucum](https://discord.gg/njPcWf8QPv)\n<:yanok:1016035727622013048> [Beni sunucuna ekle](https://discord.com/api/oauth2/authorize?client_id=1015909809771515974&permissions=8&scope=applications.commands%20bot)`),
            buttons:[ bot,eğlence,yetkili,button3 ]
        });
    };
});

client.on('clickButton', async (button) => {//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU//SENTRISE YÖNETİM BOTU

  
  if (button.id === 'bot') {
      const embed1 = new Discord.MessageEmbed()
            .setTitle('Bot komutları')
            .setColor('#F9ADC9')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `<:yanok:1016035727622013048> **s+avatar**`, value:`>>> Avatarınızı göstermenize yarar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+user**`, value:`>>> Kullanıcı bilgisi verir.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+sb**`, value:`>>> Sunucu hakkında bilgi verir.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+say**`, value:`>>> Sunucudaki toplam kişileri sayar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+botbilgi**`, value:`>>> Botun bilgilerini gösterir.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+yetkilerim**`, value:`>>> Sunucudaki yetkilerinizi gösterir.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+ping**`, value:`>>> Botun gecikmesini gösterir.`, inline: false}
                )
            .setTimestamp()
button.message.edit(embed1)//SENTRISE YÖNETİM BOTU
  
  
 } 
  
  if (button.id === 'eğlence') {
      const embed3 = new Discord.MessageEmbed()
            .setTitle('Eğlence komutları')
            .setColor('#F9ADC9')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktadır.")
            .addFields(
                {name: `<:yanok:1016035727622013048> **s+atasözü**`, value:`>>> Özlü sözlü atasözü söyler.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+ara155**`, value:`>>> Polisi arar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+balıktut**`, value:`>>> Balık tutar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+kartopu**`, value:`>>> Etiketlediğiniz kişiye kartopu atar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+tokat**`, value:`>>> Etiketlediğiniz kişiye tokat atar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+şekerye**`, value:`>>> Şimdiden afiyet olsun :P`, inline: false}

                )
            .setTimestamp()
button.message.edit(embed3)
  }
    if (button.id === 'yetkili') {
const embed2 = new Discord.MessageEmbed()
            .setTitle('Yetkili komutları')
            .setColor('#F9ADC9')
            .setDescription("Aşağıda botun sahip olduğu komutların bir listesi bulunmaktaıdır.")
            .addFields(
                {name: `<:yanok:1016035727622013048> **s+ban**`, value:`>>> Üye yasaklamanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+kick**`, value:`>>> Sunucudan üye atmanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+hg-bb**`, value:`>>> Belirttiğiniz kanala resimli gelen-giden logu tutar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+mute**`, value:`>>> Üye susturmanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+sil**`, value:`>>> Mesaj silmenizi sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+lock**`, value:`>>> Kanal kilitlemenizi sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+güvenlik**`, value:`>>> Yeni açılmış hesapları belirttiğiniz kanala loglar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+güvenlik-sıfırla**`, value:`>>> Güvenliği sıfırlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+unlock**`, value:`>>> Kanalın kilidini açmanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+unban**`, value:`>>> Yasaklı olan kişinin yasağını kaldırır.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+uyar**`, value:`>>> Üye uyarmanızı sağlar.`, inline: false},
                {name: `<:yanok:1016035727622013048> **s+forceban**`, value:`>>> Üye yasaklamanızı sağlar. (ID ban)`, inline: false}
                )
            .setTimestamp()
            .setFooter(` tarafından istendi.`)
button.message.edit(embed2)//SENTRISE YÖNETİM BOTU

      
  }
    if (button.id === 'anamenü') {//SENTRISE YÖNETİM BOTU
    const embed = new Discord.MessageEmbed()//SENTRISE YÖNETİM BOTU
.setDescription(`<:yanok:1016035727622013048> [Destek Sunucum](https://discord.gg/njPcWf8QPv)\n<:yanok:1016035727622013048> [Beni sunucuna ekle](https://discord.com/api/oauth2/authorize?client_id=1015909809771515974&permissions=8&scope=applications.commands%20bot)`)
.setColor('#F9ADC9')
          .setTitle("<a:loading:1016003439450411088> Butonlarımı kullanarak komutlarıma erişebilirsin.")
          .setAuthor(ayarlar.botisim, client.user.avatarURL())

          .setFooter("SentRise Pro - 2022")
button.message.edit(embed)
  }

});
//////////////////////////////

client.on('ready', ()=>{
client.channels.cache.get('1067820277171499078').join()
})

////////////////////KOMUTLAR SON             





//-----------------------------Resimli Hg BB -----------------------------\\


var hosgeldinCanvas = {};
hosgeldinCanvas.create = canvas.createCanvas(1300, 730)
hosgeldinCanvas.context = hosgeldinCanvas.create.getContext("2d")
hosgeldinCanvas.context.font = "72px sans-serif"
hosgeldinCanvas.context.fillStyle = "#ffffff"
  
canvas.loadImage("https://i.hizliresim.com/csvfxgy.jpg").then(async (img) => {
  hosgeldinCanvas.context.drawImage(img, 0, 0, 1300, 730)
})

client.on("guildMemberAdd", async(member) => {
  if(!db.has(`rgiris_${member.guild.id}`)) return
let kanvas = hosgeldinCanvas;
let x = 537
let y = 109
kanvas.context.beginPath()
    kanvas.context.arc(Math.floor(100 + x), Math.floor(100 + y), 100, 0, Math.PI * 2, true)
    kanvas.context.closePath()
    kanvas.context.clip()
    await canvas.loadImage(member.user.avatarURL({format: "png"})).then(img => {
        kanvas.context.drawImage(img, x, y, 200, 200)
    })
    let resim = new Discord.MessageAttachment(kanvas.create.toBuffer(), "HOSGELDINSENTRS.png")
    client.channels.cache.get(db.fetch(`rgiris_${member.guild.id}`)).send({content: `${member} Sunucuya iniş yaptı! Hoş geldin!`, files: [resim]})
});

//çıkış
var gorusuruzCanvas = {};
gorusuruzCanvas.create = canvas.createCanvas(1300, 730)
gorusuruzCanvas.context = gorusuruzCanvas.create.getContext("2d")
gorusuruzCanvas.context.font = "72px sans-serif"
gorusuruzCanvas.context.fillStyle = "#ffffff"

canvas.loadImage("https://i.hizliresim.com/nf2ytbo.jpg").then(async (img) => {
  gorusuruzCanvas.context.drawImage(img, 0, 0, 1300, 730)
})

client.on("guildMemberRemove", async(member) => {
  if(!db.has(`rgiris_${member.guild.id}`)) return;
let kanvas = gorusuruzCanvas;
let x = 537
let y = 109
kanvas.context.beginPath()
    kanvas.context.arc(Math.floor(100 + x), Math.floor(100 + y), 100, 0, Math.PI * 2, true)
    kanvas.context.closePath()
    kanvas.context.clip()
    await canvas.loadImage(member.user.avatarURL({format: "png"})).then(img => {
        kanvas.context.drawImage(img, x, y, 200, 200)
    })
    let resim = new Discord.MessageAttachment(kanvas.create.toBuffer(), "GORUSURUZSENTRS.png")
    client.channels.cache.get(db.fetch(`rgiris_${member.guild.id}`)).send({content: `${member} Sunucudan kalkış yaptı! Yine bekleriz!`, files: [resim]})
});

////////oto cevap        //acıktım\\
///////////////////////////////////////////////////////////////////////////////////////////pro
