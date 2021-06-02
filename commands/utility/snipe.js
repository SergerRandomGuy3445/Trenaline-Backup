
const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
let snipe = new Discord.Collection();

module.exports = {
	name: 'snipe',
	description: 'if he is alive yes!',
	execute(message, args) {
 snipe.set(message.channel.id, {
 content: message.content,
 author: message.author,
 });
 if (message.content === "g!snipe") {
 const msg = snipe.get(message.channel.id);
 if (!msg) return message.channel.send(" :NotApproved: | Theres Nothing To Snipe");
 const embed = new Discord.MessageEmbed()
 .setTitle("Last Deleted Message")
 .setColor("RANDOM")
 .setTimestamp()
 .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
 .addFields(
 { name: "Sender", value: msg.author.username },
 { name: "Content", value: msg.content }
 );
 message.channel.send(embed);
 }

	},
};