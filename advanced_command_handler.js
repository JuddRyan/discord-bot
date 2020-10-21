const Discord = require('discord.js');
const client = new Discord.Client();
// maak gebruik van de file system module
const fs = require('fs');
// maak gebruik van de commands
client.commands = new Discord.Collection();
// controleer dat alles js files zijn
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
// loop door alle files zodat je het juiste kan oproepen
for (const file of commandFiles) {
    // bestand opvragen
    const command = require(`./commands/${file}`);
    // 
    client.commands.set(command.name, command)
}

const prefix = '!';

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity("Bot.exe not responding", {type: "CUSTOM_STATUS"});

});

client.on('message', message => {
    // kijkt of de input met de juiste prefix begint
    // en dat de bot het niet zelf stuurt
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // verwijder de prefix
    const args = message.content.slice(prefix.length).split(/ +/);
    // zet alles naar lowercase zodat het gemakkelijker te vergelijken is
    // shift verwijderd het eerste element en stelt het gelijk aan command
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    } else if (command === 'gay') {
        message.channel.send('Bram is gay.');
    } else if (command === 'pow') {
        let value = args.shift();
        message.channel.send(Math.pow(value, args));
    } else if (command === 'root') {
        let value = args.shift();
        message.channel.send(Math.sqrt(value, args));
    } else if (command === 'spam') {
        let value = args.shift()
        let spam = "";
        for (i = 0; i < value.length; i++) {
            spam += value[i] + "\n"
        }
        message.channel.send(spam);
    }
    
});

client.login("NzY1Mjg5NDY2ODU5NzQ5Mzky.X4SpWw.xPfID6qxi3UinY2L2wU4NNgCwWc");