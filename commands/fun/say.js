const Discord = require('discord.js');

module.exports = {
	name: 'say',
	description: 'say command',
	execute(message, args) { 
 const whattosay = message.content.slice("".length).trim().split(/ +/);
whattosay.shift().toLowerCase().split(" ")[0]
message.channel.send(whattosay.join(" "))



    	},
};



