const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("Préfix: ! / !help");
    console.log("Connecté");
});

bot.login("NDQ1OTgyMDkwMzI1MTMxMjY3.Dd9p3A.XK03ZFMunuNvVUFz-EFXM0s8L34");


bot.on('message', message => {
    if (message.content === prefix + ""){
        message.channel.sendMessage("**Liste des commandes:** \n !help");
    }

    if (message.content === "!info"){
    message.reply("**Créateur:** Arès \n**Discord:** https://discord.gg/g4CBXm")
    console.log("Commande !infos effectué");
    }

});


bot.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "général").send(`Bienvenue ${member}`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "général").send(`${member} vien de quitter.`)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(role)
})
