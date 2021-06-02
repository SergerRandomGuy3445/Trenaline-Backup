const Discord = require('discord.js');

module.exports = {
    name: "helpfun",
    description: "Help command and helps the user",
  execute(message, bot, args){
    let embed = new Discord.MessageEmbed()
    .setColor('#FFFF00')
    .setDescription('FUN COMMANDS of the bot')
    .addFields(
     { name: '**Fun**', value: '`kill,google,pp,avatar,beep,hack,dm,script,playstore,say,meme.`', inline: true },
    )
    .setTimestamp()
    .setImage('https://media1.tenor.com/images/3f58e053707cc8f5186fafbf7572cb9c/tenor.gif?itemid=15841206')
    .setFooter(`Requested by ${message.author.username}`);
  message.channel.send(embed);
}




  }