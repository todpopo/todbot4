module.exports = {
    name: 'ping',
    description: 'Pong!',
    // devOnly: true,
     //testOnly: false,
    // options: Object[],
     deleted: false,
  
    callback: (client, interaction) => {
      interaction.reply(`Pong! ${client.ws.ping}ms`);
    },
  };
  