const Discord = require("discord.js");
const client = new Discord.Client();
const Chat = require("easy-discord-chatbot");
const chat = new Chat({ name: "Mr.Happy Bot" });

module.exports = {
	name: 'chasdsdsdsdsdt',
	description: 'yes!',
	async execute(message, args) {
		
    let reply = await chat.chat(message.content)
    message.channel.send(reply)

	},
};
