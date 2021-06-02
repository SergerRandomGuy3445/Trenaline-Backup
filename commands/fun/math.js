const math = require("mathjs")
const Discord = require("discord.js");

module.exports = {
 name: "math",
 description: "this is e",
 /**
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */

 async execute(client , message , args) {
 try {
if (!args[0]) return message.reply("Please input a valid question.");
 const embed = new Discord.MessageEmbed()
 .addField('Question', args.join(" "))
 .addField('Solution', math.evaluate(args.join(" ")))
 .setColor("GREEN")

 } catch (error) {
 message.channel.send("Your question is invalid!")
 .then(() => console.log(error));
  message.channel.send(embed)
 }
 }

};