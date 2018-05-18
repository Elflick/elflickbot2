const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("!")

bot.on('ready', function() {
    bot.user.setGame("dormir");
    console.log("Connecté");
});

bot.login("NDQ1OTgyMDkwMzI1MTMxMjY3.Dd9p3A.XK03ZFMunuNvVUFz-EFXM0s8L34");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("**Liste des commandes:** \n !help");
    }

    if (message.content === "!info"){
    message.reply("**Créateur:** Arès \n**Discord:** https://discord.gg/g4CBXm")
    console.log("Commande !infos effectué");
    }

});


if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Utilisateur Introuvable!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous ne pouvez pas le faire.")
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Cette personne ne peux pas être kick.")

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#00ba94")
    .addField("Utilisateur kick", `${kUser} with ID ${kUser.id}`)
    .addField("Kick par", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Tiime", message.createdAt)
    .addField("Raison", kReason);

    let kickChannel = message.guild.channel.find(`name`, "👋bonjour-aurevoir");
    if(!kickChannel) return message.channel.send("Channel introuvable.")
    
    message.guilf.member(kMember).kick(kReason);
    kickChannel.send(kickEmbed);


    return;
}

