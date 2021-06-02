const Discord = require('discord.js');

module.exports = {
	name: 'info',
	description: 'info of the bot',
	execute(message, args) {
 let embed = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setTitle('My Info')
 .setAuthor('Info of The Bot')
 .setDescription('Here You Can see The Info of me')
 .addFields(
 { name: '`Script`', value: 'NODE.JS' },
 { name: 'Bot Owner', value: 'SergerTheRandomUser#1354' },
 { name: 'Servers', value: 'N/A (Means Not Recorded)', inline: true },
 { name: 'Contributors', value: 'GodOfDoom, Shardy and ZeroZee', inline: true },
 )
 .setTimestamp()
 .setFooter("AnyWay thanks for adding the bot :D")
message.channel.send(embed);

  },
};