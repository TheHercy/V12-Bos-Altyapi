const Discord = require('discord.js')
const ayarlar = require("../ayarlar.json")
const db = require('quick.db')

exports.run = async(client, message, args) => {

    let prefix = ayarlar.prefix || db.fetch(`prefix_${message.guild.id}`)

    if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(new Discord.MessageEmbed().setDescription("**Bu Komutu Kullanabilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın !**").setColor("RANDOM"))

    let hercy = args[0]

    if(!hercy) {
        const muckmuck = new Discord.MessageEmbed()
        .setDescription(`**1 - 100 Arasında Bir Sayı Girmelisin ! Örnek Kullanım; ${prefix}sil 75**`)
        .setColor("RANDOM")
        message.channel.send(muckmuck)
    }

    message.channel.bulkDelete(hercy).then(() => {
        const hercy2 = new Discord.MessageEmbed()
        .setDescription(`**Başarıyla ${hercy} Mesaj ${message.author} Tarafından Silindi !**`)
        .setColor("RANDOM")
        message.channel.send(hercy2)
    })
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['temizle'],
    permlvl: 0
}

exports.help = {
    name: "sil"
}
