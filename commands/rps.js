// rock paper scissors

module.exports = {
	name: 'rps',
	description: 'Play rps against the bot.',
	execute(message, args) {
		const rps = Math.round(Math.random() * 2) ;

		// rock = 1
		// paper = 2
		// scissors = 0

		switch (rps) {
			case 1:
				if (args == 'rock') {
					message.channel.send('Tie! I used rock.');
				} else if (args == 'paper') {
					message.channel.send('You win! I used rock.');
				} else if (args == 'scissors') {
					message.channel.send('You lose! I used rock.');
				}
				break;
			case 2:
				if (args == 'rock') {
					message.channel.send('You lose! I used paper.');
				} else if (args == 'paper') {
					message.channel.send('Tie! I used paper.');
				} else if (args == 'scissors') {
					message.channel.send('You win! I used paper.');
				}
				break;
			case 0:
				if (args == 'rock') {
					message.channel.send('You win! I used scissors.');
				} else if (args == 'paper') {
					message.channel.send('You lose! I used scissors.');
				} else if (args == 'scissors') {
					message.channel.send('Tie! I used scissors.');
				}
				break;
		}
	},
};