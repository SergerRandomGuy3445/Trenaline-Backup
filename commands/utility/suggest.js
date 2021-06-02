const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggessecret43t",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: "main",
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
    
   
     let channel = message.mentions.channels.first() //mentioned channel
    
    if(!channel) { //if channel is not mentioned
      return message.channel.send("Please Mention the channel first")
    }
   
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("SUGGESTION: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setTimestamp()
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    })
    

    
    message.channel.send("Sended Your Suggestion to " + channel)
    
  }
}

