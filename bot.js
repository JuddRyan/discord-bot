const Discord = require('discord.js');
const client = new Discord.Client();
const fs =  require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const prefix = '!';

client.on('ready', () => {
    console.log('Connected as ' + client.user.tag);
});

client.on('message', message => {
    if (!message.content.slice(prefix.length).split(/ +/) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();

    switch (command) {
        case 'ping':
            client.commands.get('ping').execute(message, args);
            break;
        case 'spam':
            client.commands.get('spam').execute(message, args);
            console.log(args);
            break;
        case 'clear':
            client.commands.get('clear').execute(message, args);
            break;
        case 'embed':
            client.commands.get('embed').execute(message, args);
            break;
        case 'rps':
            client.commands.get('rps').execute(message, args);
            break;
        case 'roll':
            client.commands.get('roll').execute(message, args);
            break;
    }

})

client.login("NzY1Mjg5NDY2ODU5NzQ5Mzky.X4SpWw.xPfID6qxi3UinY2L2wU4NNgCwWc");