module.exports = {
    name: 'lockdown',
    description: 'this commands lockdown channel',
    execute(message, args){
if(message.member.hasPermission("MANAGE_CHANNELS")) {
message.guild.channels.cache.filter(ch => ch.type === "text").forEach(c => {
c.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: false
});
});
message.channel.send("i have locked the server down")
.catch(err => {
message.channels.send("something went wrong")
console.error(err);
});
} else {
message.channel.send("no perms")

};
    },
};