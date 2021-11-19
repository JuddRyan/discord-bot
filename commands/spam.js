module.exports = {
	name: 'spam',
	description: 'places text vertically',
	execute(message, args) {
		const value = args.shift();
		let spam = '';
		for (let i = 0; i < value.length; i++) {
			spam += value[i] + '\n';
		}

		message.channel.send(spam);
	},
};