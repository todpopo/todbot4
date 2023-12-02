const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
  } = require('discord.js');
  
  module.exports = {
    deleted: false,
    name: 'ban',
    description: 'Bane um usuário',
    // devOnly: Boolean,
     //testOnly: false,
    options: [
      {
        name: 'user',
        description: 'Usuário a banir.',
        required: true,
        type: ApplicationCommandOptionType.Mentionable,
      },
      {
        name: 'motivo',
        description: 'O motivo do ban.',
        type: ApplicationCommandOptionType.String,
      },
    ],
    permissionsRequired: [PermissionFlagsBits.BanMembers],
    botPermissions: [PermissionFlagsBits.Administrator],
  
    callback: (client, interaction) => {
      interaction.reply('ban..');
    },
  };
  