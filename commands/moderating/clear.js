module.exports = {
    name: 'clear',
    description: 'clear messages!',
    async execute(message, args) {
        if(!args[0]) return message.reply(`\`\`\`yaml\nPlease Enter a Number to delete!\n\`\`\``)
        if(isNaN(args[0])) return message.reply(`\`\`\`yaml\nPlease Enter The Valid Number!\n\`\`\``);

        if(args[0] > 100) return message.reply(`\`\`\`yaml\nYou cant delete more than 100 message!\n\`\`\``)
        if(args[0] < 1) return message.reply(`\`\`\`yaml\nYou need atleast 5 message to delete!\n\`\`\``)

       await message.channel.messages.fetch({limit: args [0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}