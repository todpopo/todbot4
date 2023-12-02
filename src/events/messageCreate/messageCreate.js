// root/src/events/messageCreate/index.js
module.exports = (client, message) => {
    // Your existing messageCreate event code goes here
    const targetChannelId = '1180288228192948225';
  
    if (message.author.bot || !message.guild) return;
  
    if (message.channel.id === targetChannelId) {
      message.react('✅');
      console.log(`reagi: ${message.content}`);
  
      const user1 = message.author;
  
      message.awaitReactions({
        filter: (reaction, user) => reaction.emoji.name === '✅' && !user.bot,
        max: 1,
      }).then((collected) => {
        const userReacted = collected.first()?.users.cache.filter(user => !user.bot).first();
  
        if (userReacted) {
          const threadName = `Ajuda: ${user1.tag} e ${userReacted.tag} ID: (${message.id})`;
          message.startThread({
            name: threadName,
            autoArchiveDuration: 1440,
          }).then((thread) => {
            thread.send(`Ei, <@${user1.id}> e <@${userReacted.id}>, aqui está a thread para o disk-ajuda! Ela vai ser arquivada depois de 24 horas de inatividade.`);
            console.log(`criei uma thread: ${threadName}`);
          }).catch(console.error);
        } else {
          console.log('isso é um absurdo');
        }
      }).catch(console.error);
    }
  };
  