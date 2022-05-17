const Discord = require('discord.js');
const bot = new Discord.Client();

const prefix = 'v!';

const fs = require('fs');

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command);
}

bot.on('ready', () =>{
    console.log('V.E.C.T.O.R. is online!');
})

// Conversation Messages 

bot.on('message', msg =>{
    if(msg.content === "Hey Vector"){
        msg.reply('I AM VECTOR! BZZT Need assistance?');
    }
    else if(msg.content === "Hey Vector!"){
        msg.reply('I AM VECTOR! BZZT Need assistance?');
    }
    else if(msg.content === "hey Vector"){
        msg.reply('I AM VECTOR! BZZT Need assistance?');
    }
    else if(msg.content === "hey vector"){
        msg.reply('I AM VECTOR! BZZT Need assistance?');
    }
    else if(msg.content === "Hey vector"){
        msg.reply('HI THERE! BZZT');
    }
})

bot.on('message', msg =>{
    if(msg.content === "Hello Vector"){
        msg.reply('HELLO, I AM VECTOR!');
    }
    else if(msg.content === "Hello Vector!"){
        msg.reply('HELLO, I AM VECTOR! BZZT');
    }
    else if(msg.content === "hello Vector"){
        msg.reply('HELLO!')
    }
    else if(msg.content === "hello vector"){
        msg.reply('HELLO!')
    }
    else if(msg.content === "Hello vector"){
        msg.reply('HI THERE! BZZT');
    }
})

bot.on('message', msg =>{
    if(msg.content === "Hi Vector"){
        msg.reply('HI THERE, I AM VECTOR!');
    }
    else if(msg.content === "Hi Vector!"){
        msg.reply('HI THERE, I AM VECTOR! BZZT');
    }
    else if(msg.content === "hi Vector"){
        msg.reply('HI THERE! BZZT');
    }
    else if(msg.content === "hi vector"){
        msg.reply('HI THERE! BZZT');
    }
    else if(msg.content === "Hi vector"){
        msg.reply('HI THERE! BZZT');
    }
})

bot.on('message', msg =>{
    if(msg.content === "Howdy Vector"){
        msg.reply('HOWDY, I AM VECTOR!');
    }
    else if(msg.content === "Howdy Vector!"){
        msg.reply('HOWDY, I AM VECTOR! BZZT');
    }
    else if(msg.content === "howdy Vector"){
        msg.reply('HOWDY!')
    }
    else if(msg.content === "howdy vector"){
        msg.reply('HOWDY!')
    }
    else if(msg.content === "Howdy vector"){
        msg.reply('HOWDY!')
    }
})

bot.on('message', msg =>{
    if(msg.content === "Hola Vector"){
        msg.reply('HOLA! SOY VECTOR!');
    }
    else if(msg.content === "Hola Vector!"){
        msg.reply('HOLA! SOY VECTOR! BZZT');
    }
    else if(msg.content === "hola Vector"){
        msg.reply('HOLA! BZZT');
    }
    else if(msg.content === "hola vector"){
        msg.reply('HOLA! BZZT');
    }
    else if(msg.content === "Hola vector"){
        msg.reply('HOLA! BZZT');
    }
})

bot.on('message', msg =>{
    if(msg.content === "Vector is cool"){
        msg.reply('Thank you! You are cool as well!');
    }
    else if(msg.content === "vector is cool"){
        msg.reply('Thank you! You are cool as well!');
    }
    else if(msg.content === "cool bot"){
        msg.reply('The best there is! B)');
    }
    else if(msg.content === "Cool bot"){
        msg.reply('The best there is! B)');
    }
    else if(msg.content === "Vector is awesome"){
        msg.reply('*roboblush* ~BZZT~');
    }
    else if(msg.content === "vector is awesome"){
        msg.reply('*roboblush* ~BZZT~');
    }
    else if(msg.content === "nice bot"){
        msg.reply('THANK YOU! :)');
    }
    else if(msg.content === "Nice bot"){
        msg.reply('THANK YOU! :)');
    }
    else if(msg.content === "good bot"){
        msg.reply(':D');
    }
    else if(msg.content === "Good bot"){
        msg.reply(':D');
    }
    else if(msg.content === "bad bot"){
        msg.reply('no u');
    }
    else if(msg.content === "Bad bot"){
        msg.reply('no u');
    }
})

bot.on('message', msg =>{
    if(msg.content === "ban natoo"){
        msg.reply('cringe');
    }
    if(msg.content === "Ban natoo"){
        msg.reply('cringe');
    }
    else if(msg.content === "I love piplup"){
        msg.reply('cap');
    }
    else if(msg.content === "I love Piplup"){
        msg.reply('cap');
    }
    else if(msg.content === "mawile good"){
        msg.reply('based');
    }
    else if(msg.content === "mawile bad"){
        msg.reply('cringe');
    }
    else if(msg.content === "someone is posting cringe"){
        msg.reply('Not on my watch! cringe');
    }
    else if(msg.content === "Someone is posting cringe"){
        msg.reply('Not on my watch! cringe');
    }
    else if(msg.content === "that's cringe"){
        msg.reply('cringe');
    }
    else if(msg.content === "That's cringe"){
        msg.reply('cringe');
    }
    else if(msg.content === "infernape sucks"){
        msg.reply('cap');
    }
    else if(msg.content === "infernape is garbage"){
        msg.reply('cap');
    }
    else if(msg.content === "Infernape sucks"){
        msg.reply('cap');
    }
    else if(msg.content === "Infernape is garbage"){
        msg.reply('cap');
    }
    else if(msg.content === "Infernape is bad"){
        msg.reply('cap');
    }
    else if(msg.content === "infernape is bad"){
        msg.reply('cap');
    }
    else if(msg.content === "Infernape bad"){
        msg.reply('cap');
    }
    else if(msg.content === "chacho"){
        msg.reply('based');
    }
})

bot.on('message', msg =>{
    if(msg.content === "Piplup"){
        msg.reply('Shall I initiate PK Donuts 1000 protocol?');
    }
    else if(msg.content === "piplup"){
        msg.reply('WHERE? *~points magnets~*');
    }
    else if(msg.content === "Piplup good"){
        msg.reply('cap');
    }
    else if(msg.content === "piplup good"){
        msg.reply('cap');
    }
    else if(msg.content === "Tauros"){
        msg.reply('...');
    }
    else if(msg.content === "tauros"){
        msg.reply('...');
    }
    else if(msg.content === "Earthquake"){
        msg.reply('NO.');
    }
    else if(msg.content === "earthquake"){
        msg.reply('no.');
    }
    else if(msg.content === "Foe Tauros used Earthquake!"){
        msg.reply('You deserve ban but that is below my paygrade.');
    }
})

// New Member Alert

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "arrivals");
    if(!channel) return;

    channel.send(`Welcome to the Guild, ${member}! Please read the rules and introduce yourself in #sentry-post! Happy to have you here! ~BZZT`)
});

// Message Reactions

// Coming Soon

// Commands

bot.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'charge'){
        bot.commands.get('charge').execute(message, args);
    }
    else if(command === 'pkpog'){
        bot.commands.get('pkpog').execute(message, args);
    }
    else if(command === 'robotalk'){
        bot.commands.get('robotalk').execute(message, args);
    }
    else if(command === 'payrespects'){
        bot.commands.get('payrespects').execute(message, args);
    }
    else if(command === 'addrole'){
        bot.commands.get('addrole').execute(message, args);
    }
    else if(command === 'kick'){
        bot.commands.get('kick').execute(message, args);
    }
    else if(command === 'plug'){
        bot.commands.get('plug').execute(message, args);
    }
    else if(command === 'type'){
        bot.commands.get('type').execute(message, args, Discord);
    }
    else if(command === 'diceroll'){
        bot.commands.get('diceroll').execute(message, args);
    }
})

bot.login(process.env.token);