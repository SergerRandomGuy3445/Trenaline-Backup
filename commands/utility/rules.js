const Discord = require('discord.js');

module.exports = {
	name: 'rules',
	description: 'send the users ping',
	execute(message, args) {
    const embed = new Discord.MessageEmbed()
	.setTitle('RULES')
	.setDescription('**FOLLOW THE RULES!!!!**')
	.addFields(
	{ name: 'Rule 1', value: 'No Offensive, inappropriate, sexial explict Profile', inline: false },
	{ name: 'Rule 2', value: 'No Discriminating', inline: false },
		{ name: 'Rule 3', value: 'No Bullying', inline: false },
		{ name: 'Rule 4', value: 'No talking about raids', inline: false },
  	{ name: 'Rule 5', value: 'No Swearing', inline: false },
	{ name: 'Rule 6', value: 'No Memes In the General(Important)', inline: false },
  	{ name: 'Rule 7', value: 'No Begging for roles', inline: false },
  	{ name: 'Rule 8', value: 'Dont be idiot/jerk', inline: false },
	)
   .setColor('#0099ff')
	.setTimestamp()

	message.channel.send(embed);
	},
};


