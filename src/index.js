const express = require('express');
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const eventHandler = require('./handlers/eventHandler');
require('dotenv').config()

const app = express();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
  ],
});

let status = [
  {
    name: 'frase1',
    type: ActivityType.Watching,
    url: 'https://www.youtube.com/watch?v=BbeeuzU5Qc8',
  },
  {
    name: 'frase2',
    type: ActivityType.Playing,
  },
  {
    name: 'frase3',
    type: ActivityType.Streaming,
    url: 'https://www.youtube.com/watch?v=BbeeuzU5Qc8',
  },
  {
    name: 'frase4',
    type: ActivityType.Competing,
  },
  {
    name: 'frase5',
    type: ActivityType.Listening,
  },
  
]

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);

eventHandler(client);

// Wait for the bot to be fully ready before triggering the custom event
client.once('ready', () => {
  // Trigger the custom hello event with an argument
  client.emit('hello', 'World');

  // Set initial status
  setInterval(() => {
    let random = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[random]);
  }, 12500);
});

// Log errors to console
client.on('error', console.error);

client.login(process.env.tokenarabio);