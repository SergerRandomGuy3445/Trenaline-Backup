const Discord = require('discord.js');

module.exports = {
	name: 'react',
	description: 'send the users ping',
	execute(message, args) {
 message.react("😎");
	},
};


