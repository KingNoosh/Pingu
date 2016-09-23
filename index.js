const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
  client.guilds.first().members.map(function(member) {
    if (!member.roles.find('id', '226663755990302721')) {
      member.addRole('226663755990302721').then(function(arg) {
        console.log(arg);
      }, function(arg) {
        console.log(arg);
      });
    }
    return;
  });
});
client.on('guildMemberAdd', (guild, member) => {
  if (!member.roles.find('id', '226663755990302721')) {
    member.addRole('226663755990302721').then(function(arg) {
      console.log(arg);
    }, function(arg) {
      console.log(arg);
    });
    }
});
client.on('message', message => {
  if (/.*\/\/.*discord\..*/i.test(message.content)) {
    message.delete()
     .then(msg => console.log(`Deleted message from ${msg.author}`))
     .catch(console.log);
  }
});
client.login(process.env.PINGU);
