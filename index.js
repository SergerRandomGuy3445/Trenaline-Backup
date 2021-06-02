const express = require("express")
const app = express()

app.get("/", (req, res) => {
 res.send("hello btw dont forget to try to use vsc instead of repl.it")
})

app.listen(3000, () => {
 console.log("A really sus bot")
})



const Discord = require('discord.js');

const { prefix, token } = require('./config.json');
const https = require('https');
const fs = require('fs');



 const client = new Discord.Client({ disableMentions: 'everyone' });
let snipe = new Discord.Collection();

const disbut = require('discord-buttons')(client);

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.cooldowns = new Discord.Collection();

client.shop = {
  laptop: {
    cost: 2000
  },
  mobile: {
    cost: 1000
  },
  pc: {
    cost: 3000
  }
};

client.on('ready', () => 
{
 client.user.setPresence({ activity: { name: `${prefix}HELP | Bunnies :)`, type: 'WATCHING' }, status: "idle"})
});

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}
client.once('ready', () => {
	console.log('Its Not ready man :sob:');
});

 client.on("message", message => {
	console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
const commandName = args.shift().toLowerCase();




if (!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);
		 client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

try {
	command.execute(message, args);
} catch (error) {
	// ...
}
const { cooldowns } = client;

if (!cooldowns.has(command.name)) {
	cooldowns.set(command.name, new Discord.Collection());
}


});



client.login(process.env.TOKEN_BOT);