const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
const config = require('./config.json');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const prefix = config.prefix;

client.on('ready', () => {
	console.log('Connected as ' + client.user.tag);
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).split(/ +/);
	console.log(args);

	let value;

	const command = args.shift().toLowerCase();

	switch (command) {
		case 'ping':
			client.commands.get('ping').execute(message, args);
			break;
		case 'spam':
			client.commands.get('spam').execute(message, args);
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
		case 'search':
			client.commands.get('search').execute(message, args);
			break;
		case 'commands':
			client.commands.get('commands').execute(message);
			break;
		case 'play':
			client.commands.get('play').execute(message, args);
			break;
		case 'reaction':
			client.commands.get('reaction').execute(message);
			break;
		case 'emo':
			client.commands.get('emo').execute(message, args);
			break;
		case 'pow':
			// change this later
			value = args.shift();
			message.channel.send(Math.pow(value, args));
			break;
	}

});

client.login(config.token);