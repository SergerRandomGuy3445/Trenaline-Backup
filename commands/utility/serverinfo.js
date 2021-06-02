const Discord = require('discord.js');


module.exports = {
	name: 'serverinfo',
	description: 'sends the serverinfo of the user!',
	execute(message, args) {
    let embed = new Discord.MessageEmbed()
    .setColor("WHITE")
    .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
    .addField("Owner", message.guild.owner, true)
    .addField("Channels", message.guild.channels.cache.size, true)
    .addField("Roles", message.guild.roles.cache.size, true)
    .addField("Emojis", message.guild.emojis.cache.size, true)
    .addField("Verification Level", message.guild.verificationLevel, true)
    .addField("Region", `${message.guild.region}`, true)
    .addField("Members", `Total: ${message.guild.members.cache.size} | Humans: ${message.guild.members.cache.filter(member => !member.user.bot).size} | Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
    .setImage('https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Info_icon-72a7cf.svg/1200px-Info_icon-72a7cf.svg.png')
    .setFooter(`ID: ${message.guild.id}, Created • ${message.guild.createdAt.toDateString()}`)
    .setTimestamp()
   
    message.channel.send(embed)
	},
};