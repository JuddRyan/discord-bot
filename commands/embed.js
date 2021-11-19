const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'embed',
	description: 'A basic embedded message',
	execute(message) {
		// geen ; gebruiken
		const embed = new MessageEmbed()
			.setTitle('Title')
			.setAuthor('Name')
			.setDescription('Discription goes here')
			.addField({
				name: 'title here',
				value: 'discription here',
				inline: true,
			})
			.setImage('https://discord.js.org/static/logo-square.png')
			.setTimestamp()
			.setFooter('TEST!!!');
		message.channel.send(embed);
	},
};