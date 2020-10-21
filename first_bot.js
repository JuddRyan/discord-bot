const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log("Connected as " + client.user.tag);

    client.user.setActivity("youtube", {type: "WATCHING"});

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
        message.channel.send('pong!');
    } else if (command === 'commands') {
        message.channel.send('ping \npow \npow2 \nroot')
    } else if (command === 'gay') {
        message.channel.send('Bram is gay.');
    } else if (command === 'pow2') {
        message.channel.send(Math.pow(args, 2));
    } else if (command === 'pow') {
        let value = args.shift();
        message.channel.send(Math.pow(value, args));
    } else if (command === 'root') {
        let value = args.shift();
        message.channel.send(Math.sqrt(value, args));
    } else if (command === 'root2') {
        // deze shit werkt nie

        let value = args.shift();
        let firstRoot = Math.pow(value, 1/args);
        value == Math.pow(firstRoot, args);
        message.channel.send(value);
    } else if (command === 'spam') {
        let value = args.shift();
        let spam = "";
        for (i = 0; i < value.length; i++) {
            spam += value[i] + "\n"
        }
        message.channel.send(spam);
    } else if (bot === 'good bot') {
        message.channel.send('ty');
    }
    
});

client.login("NzY1Mjg5NDY2ODU5NzQ5Mzky.X4SpWw.xPfID6qxi3UinY2L2wU4NNgCwWc");