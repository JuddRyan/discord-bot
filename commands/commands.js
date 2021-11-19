module.exports = {
	name: 'commands',
	description: 'Shows list of commands',
	execute(message) {
		message.channel.send('ping \nclear \nroll \nembed \nroll \nrps \nspam');
	},
};
