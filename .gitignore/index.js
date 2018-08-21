const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("l!")

bot.on('ready', function() {
    bot.user.setGame("Command: l!help");
    console.log("Connected");
});

bot.login("NDgxNDcyNTA4MTg1NDExNTk2.Dl3IKQ.BXk75O5uZkxWXL3zftd8nzrZBSM");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.sendMessage("Liste des commandes : \n -l!help");
    }

    if (message.content === "Salut"){
        message.reply("bien le bonjour c:");
        console.log("Commande Salut effectué");
    }
});
