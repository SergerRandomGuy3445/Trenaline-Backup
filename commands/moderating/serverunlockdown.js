module.exports = {
    name: 'unlockdown',
    description: 'this commands lockdown channel',
    execute(message, args){
if(message.member.hasPermission("MANAGE_CHANNELS")) {
message.guild.channels.cache.filter(ch => ch.type === "text").forEach(c => {
c.updateOverwrite(message.guild.roles.everyone, {
SEND_MESSAGES: true
});
});
message.channel.send("i have unlocked the server down")
.catch(err => {
message.channels.send("something went wrong")
console.error(err);
});
} else {
message.channel.send("no perms")
}
},
};