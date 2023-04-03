
const Discord = require('discord.js');
const db = require('quick.db')
const { MessageButton } = require("discord-buttons");

exports.run = async (client, message, args) => {
 
  
  let uwu = false;
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
    const choice = response.first().content
    if (choice == 'hayır' || choice == 'h') return message.channel.send('<a:srno:1015943126470361149> İşlem iptal edildi.')
    if (choice !== 'evet' && choice !== 'e') {
      message.channel.send(':warning: Sistem yeniden başlatılsın mı?\n\n <a:yukleniyor:921759554574884904> **Bu işlemden geri dönemezsiniz.** evet (e) - hayır (h)  Arasında cevap verin.')
    }
    if (choice == 'evet' || choice == 'e') uwu = true
  }
  if (uwu) {
    try {
      message.channel.send("<a:loading:1016003439450411088> Sistem kapatılıyor...").then(async msg => {
        setTimeout(() => {
          
          msg.edit("<a:sryes:1015942756776026174> Sistem kapatılıyor.");
        }, 600);
        setTimeout(() => {
          msg.edit("<a:sryes:1015942756776026174> Sistem kapatılıyor..");
        }, 600);
        setTimeout(() => {
          msg.edit("<a:sryes:1015942756776026174> Sistem kapatıldı...");
        }, 600);
        setTimeout(() => {
    
          msg.edit("<a:892143753106706432:911727655441813526> Dosyalar yükleniyor.");
        }, 800);
        setTimeout(() => {
          msg.edit("<a:892143753106706432:911727655441813526> Dosyalar yükleniyor..");
         }, 800);
         setTimeout(() => {
          msg.edit("<a:892143753106706432:911727655441813526> Dosyalar yükleniyor...");
        }, 1000);
        setTimeout(() => {
             msg.edit("<a:892143753106706432:911727655441813526> Kütüphane dosyaları yükleniyor.");
        }, 800);
        setTimeout(() => {
        msg.edit("<a:892143753106706432:911727655441813526> Kütüphane dosyaları yükleniyor..");
        }, 800);
        setTimeout(() => {
        msg.edit("<a:892143753106706432:911727655441813526> Kütüphane dosyaları yükleniyor...");
        }, 800);
        setTimeout(() => {
        msg.edit("<a:892143753106706432:911727655441813526> Kütüphane dosyaları yükleniyor.");
        }, 800);
        setTimeout(() => {
        msg.edit("<a:892143753106706432:911727655441813526> Kütüphane dosyaları yükleniyor..");
        }, 800);
        setTimeout(() => {
        msg.edit("<a:892143753106706432:911727655441813526> Kütüphane dosyaları yükleniyor...");
        }, 800);
        setTimeout(() => {
          msg.edit("<a:loading:1016003439450411088> Komutlar yükleniyor.");
        }, 600);
        setTimeout(() => {
          msg.edit("<a:loading:1016003439450411088> Komutlar yükleniyor..");
        }, 600);
        setTimeout(() => {
          msg.edit("<a:loading:1016003439450411088> Komutlar yükleniyor...");
        }, 600);
        setTimeout(() => {
          msg.edit("<a:loading:1016003439450411088> Komutlar yükleniyor.");
        }, 600);
        setTimeout(() => {
          msg.edit("<a:892143753106706432:911727655441813526> Sistem başlatılıyor.");
        }, 1100);
        setTimeout(() => {
          msg.edit("<a:892143753106706432:911727655441813526> Sistem başlatılıyor..");
        }, 1100);
        setTimeout(() => {
          msg.edit("<a:892143753106706432:911727655441813526> Sistem başlatılıyor...");
        }, 1100);
        setTimeout(() => {
          msg.edit("<a:892143753106706432:911727655441813526> Sistem başlatılıyor.");
        }, 1100);
        setTimeout(() => {
          msg.edit("<a:892143753106706432:911727655441813526> Sistem başlatılıyor..");
        }, 1100);
        setTimeout(() => {
          msg.edit("<a:892143753106706432:911727655441813526> Sistem başlatılıyor...");
          msg.delete()
        }, 1200);
        setTimeout(() => {


 let buton1 = new MessageButton()
    .setStyle("url")
    .setLabel("Destek sunucusu")
    .setURL("https://discord.gg/DFHvN7A2wt")



          message.channel.send(`**<a:sryes:1015942756776026174> SentRise** başarılı bir şekilde yeniden başlatıldı!`,{buttons:[buton1]});

        }, 28000)
      
      })
      
      } catch(e) {
        message.channel.send('<a:srno:1015943126470361149> Bir hata var!')
      }
  }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['rs'],
    permLevel: 0,
    katagori: "sahip"
}

exports.help = {
    name: 'rs',
    description: 'sentrise',
    usage: 'rs'
}