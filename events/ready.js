const chalk = require("chalk"); //chalk modül tanımı
const moment = require("moment"); //moment modül tanımı
const Discord = require("discord.js"); //discord.js tanımı
const ayarlar = require("../ayarlar.json"); //ayarlar.json'dan veri alabilmesi için

var prefix = ayarlar.prefix; // prefixi tanımladık

module.exports = client => {

  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!` //Bot çalışınca konsola yazar
  )
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`//Bot çalışınca konsola yazar
  );
  client.user.setStatus("idle");//Botun durumu idle = boşta , dnd = rahatsız etmeyin , online = çevirimiçi
  var oyun = [//değişen oynuyor kısımları
    `Hercy Was Here`,//değişen oynuyor kısımları
    `${client.guilds.cache.size} sunucuya ve ${client.users.cache.size} kişiye hizmet vermekteyim.`,//değişen oynuyor kısımları
    `${prefix}ping | ${prefix}sil`//değişen oynuyor kısımları
  ];

  setInterval(function () {//değişen oynuyor kısımları
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);//değişen oynuyor kısımları

    client.user.setActivity(oyun[random], "");//değişen oynuyor kısımları
  }, 2 * 3000);//değişen oynuyor kısımları
};//değişen oynuyor kısımları
