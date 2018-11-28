const Discord = require('discord.js');
const bot25 = new Discord.Client();

bot25.on('ready', () => {
  console.log('Logged in as S25-26-27')
});


bot25.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot25.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot25.on('ready', () => {
  let ch = bot25.guilds.get("507972785650401301").channels.find(c => c.id == "516958010883440643");
  setInterval(function() {
    ch.send("25th Lover")
  }, 900);
});


bot25.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f25"){
    message.channel.send(args.join(" "))
  }
});


bot25.login(process.env.FB25);
////////////////////////
////////////////////////
const bot26 = new Discord.Client();
bot26.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot26.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot26.on('ready', () => {
  let ch = bot26.guilds.get("507972785650401301").channels.find(c => c.id == "516958010883440643");
  setInterval(function() {
    ch.send("26th Lover")
  }, 900);
});


bot26.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f26"){
    message.channel.send(args.join(" "))
  }
});


bot26.login(process.env.FB26);
////////////////////////
////////////////////////
const bot27 = new Discord.Client();
bot27.on('message', message => {
  if(message.content.startsWith('f-d')){
    message.channel.send('#daily')
  }
});


bot27.on('message', message => {
  if(message.content.startsWith(`f-r`)){
    message.channel.send(`#rep <@510098846970281984>`)
  }
});


bot27.on('ready', () => {
  let ch = bot27.guilds.get("507972785650401301").channels.find(c => c.id == "516958010883440643");
  setInterval(function() {
    ch.send("24th Lover")
  }, 900);
});


bot27.on('message', message => {
  let command = message.content.split(" ")[0];
  let args = message.content.split(" ").slice(1);
  if(!args) return message.reply(`شو يدك امي تقول؟؟؟`);
  if(command == "f27"){
    message.channel.send(args.join(" "))
  }
});


bot27.login(process.env.FB27);
