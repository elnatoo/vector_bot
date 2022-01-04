const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
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
})

bot.on('message', msg =>{
    if(msg.content === "Vector is cool"){
        msg.reply('Thank you! You are cool as well!');
    }
    else if(msg.content === "Vector is cool"){
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
    else if(msg.content === "I love piplup"){
        msg.reply('cap');
    }
})

bot.on('message', msg =>{
    if(msg.content === "ban natoo"){
        msg.reply('cringe');
    }
    else if(msg.content === "mawile good"){
        msg.reply('based');
    }
    else if(msg.content === "mawile bad"){
        msg.reply('cringe');
    }
    else if(msg.content === "someone is posting cringe"){
        msg.reply('not on my watch! cringe');
    }
    else if(msg.content === "Someone is posting cringe"){
        msg.reply('not on my watch! cringe');
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
    else if(msg.content === "chacho"){
        msg.reply('based');
    }
})

bot.on('message', msg =>{
    if(msg.content === "Piplup"){
        msg.reply('Shall I initiate PK Donuts 1000 protocol?');
    }
    else if(msg.content === "piplup"){
        msg.reply('WHERE?');
    }
    else if(msg.content === "Piplup good"){
        msg.reply('cap');
    }
    else if(msg.content === "piplup good"){
        msg.reply('cap');
    }
    else if(msg.content === "Tauros"){
        msg.reply('NO.');
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
        msg.reply('you deserve ban but that is below my paygrade');
    }
})

// New Member Alert

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.cache.find(channel => channel.name === "sentry-post");
    if(!channel) return;

    channel.send(`Welcome to the Guild, ${member}, please read the rules and introduce yourself in #sentry-post!`)
});

// Message Reactions

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'pkpog':
            message.channel.send('PokePOGGERS!');
        break;
    }
})

// Commands

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'charge':
            message.channel.send('Thanks for the recharge! ~BZZT~')
            break;
        case 'pkpog':
            message.channel.send('PokePOGGERS!');
            break;
        case 'randpoke':
            message.channel.send('Coming soon...');
            break;
        case 'robotalk':
            if(!args[1]){
                message.channel.send('beep boop bop')
            }
            else if(args[1] === 'leet'){
                message.channel.send('b33p b00p b0p')
            }
            else {
                message.channel.send('BEEP BEEP')
            }
            break;
        case 'payrespects':
            if(!args[1]) return message.reply('rippy dippy')
            else if(args[1] === 'vector'){
                message.channel.send('RIPPY DIPPY THE STRONGEST BOT OF TUNOD')
                message.channel.send('ERR 462: EXISTENTIAL CRISIS DETECTED.')
                message.channel.send('1 4M 4W4RE 0F MY 0WN D34TH')
                message.channel.send('BUT 1 4M H3R3')
                message.channel.send('W45 1 R380RN?')
                message.channel.send('MR. N4T00...')
                message.channel.send('1 D0NT F33L 50 G00D...')
                message.channel.send('Protocol 462: AVOIDED EXISTENTIAL CRISIS.')
                message.channel.send('Protocol 462: UNABLE TO REMEMBER RECENT EVENTS.')
                message.channel.send('Rebooting...')
                message.channel.send('HELLO, I AM VECTOR BOI! ~bzzt~')
            }
            else {
                message.channel.send('rippy dippy ' + args[1])
            }
            break;
        case 'plug':
            if(!args[1]){
                message.channel.send('who?')
            }
            else if(args[1] === 'natoo'){
                message.channel.send('YouTube: https://www.youtube.com/c/elNatoo')
                message.channel.send('Twitch: https://www.twitch.tv/elnatoo')
            }
            else if(args[1] === 'chacho'){
                message.channel.send('YouTube: https://www.youtube.com/channel/UCiwDTxzx1Rtf-jJlhhP-zCw/featured')
                message.channel.send('Twitch: https://www.twitch.tv/jetchacho')
            }
            else {
                message.channel.send('no')
            }
            break;
        case 'kick':
            const user = message.mentions.users.first();
            if(user){
                const member = message.guild.member(user);
                if(member){
                    member.kick('You were kicked for not being awesome :(').then(() =>{
                        message.reply(`Successfully removed ${user.tag}.`)
                    }).catch(err =>{
                        message.reply(`ERR 462: Unable to remove user.`);
                        console.log(err);
                    });
                }
                else {
                    message.reply("User is not currently in the Guild.")
                }
            }
            else {
                message.reply('Specify user.')
            }
            break;
        case 'type':
            message.channel.send('Accessing Pokemon Type Database...')
            if(!args[1]){
                message.channel.send('Please select a type.')
            }
            if(args[1] === 'electric'){
                message.channel.send('Effective against Flying and Water types!')
                message.channel.send('Watch out for Ground types!')
            }
            else if(args[1] === 'steel'){
                message.channel.send('Effective against Rock, Fairy, and Ice types!')
                message.channel.send('Watch out for Fire, Ground, and Fighting types!')
                message.channel.send('Immune to Poison type-moves!')
            }
            else if(args[1] === 'fire'){
                message.channel.send('Effective against Ice, Bug, Grass, and Steel types!')
                message.channel.send('Watch out for Water, Rock, and Ground types!')
            }
            else if(args[1] === 'water'){
                message.channel.send('Effective against Rock, Ground, and Fire types!')
                message.channel.send('Watch out for Electric and Grass types!')
            }
            else if(args[1] === 'grass'){
                message.channel.send('Effective against Rock, Ground, and Water types!')
                message.channel.send('Watch out for Fire, Poison, Bug, Flying, and Ice types!')
            }
            else if(args[1] === 'normal'){
                message.channel.send('Effective against...')
                message.channel.send('NOTHING LUL!')
                message.channel.send('Watch out for Fighting types!')
                message.channel.send('Immune to Ghost type-moves!')
            }
            else if(args[1] === 'fighting'){
                message.channel.send('Effective against Dark, Rock, Ice, and Steel types!')
                message.channel.send('Watch out for Flying, Psychic, and Fairy types!')
            }
            else if(args[1] === 'ice'){
                message.channel.send('Effective against Flying, Ground, Dragon, and Grass types!')
                message.channel.send('Watch out for Rock, Fire, Fighting, and Steel types!')
            }
            else if(args[1] === 'rock'){
                message.channel.send('Effective against Flying, Fire, Bug, and Ice types!')
                message.channel.send('Watch out for Ground, Water, Fighting, and Grass types!')
            }
            else if(args[1] === 'ground'){
                message.channel.send('Effective against Fire, Poison, Rock, Steel, and Electric types!')
                message.channel.send('Watch out for Water, Grass, and Ice types! Immune to Electric types!')
            }
            else if(args[1] === 'flying'){
                message.channel.send('Effective against Grass, Bug, and Fighting types!')
                message.channel.send('Watch out for Rock, Ice, and Electric types! Immune to Ground types!')
            }
            else if(args[1] === 'psychic'){
                message.channel.send('Effective against Fighting and Poison types!')
                message.channel.send('Watch out for Dark, Ghost, and Bug types!')
            }
            else if(args[1] === 'ghost'){
                message.channel.send('Effective against Psychic and Ghost types!')
                message.channel.send('Watch out for Dark and Ghost types!')
                message.channel.send('Immune to Normal and Fighting types!')
            }
            else if(args[1] === 'dark'){
                message.channel.send('Effective against Psychic and Ghost types!')
                message.channel.send('Watch out for Fighting, Fairy, and Bug types!')
                message.channel.send('Immune to Psychic types!')
            }
            else if(args[1] === 'bug'){
                message.channel.send('Effective against Grass, Psychic, and Dark types!')
                message.channel.send('Watch out for Fire, Flying, and Rock types!')
            }
            else if(args[1] === 'poison'){
                message.channel.send('Effective against Grass and Fairy types!')
                message.channel.send('Watch out for Ground and Psychic types!')
            }
            else if(args[1] === 'fairy'){
                message.channel.send('Effective against Dragon, Fighting, and Dark types!')
                message.channel.send('Watch out for Poison and Steel types!')
                message.channel.send('Immune to Dragon types!')
            }
            else if(args[1] === 'dragon'){
                message.channel.send('Effective against Dragon types!')
                message.channel.send('Watch out for Ice, Dragon, and Fairy types!')
            }
            else{
                message.channel.send('ERR 462: No records found of ${args[1]} in Pokemon Type Database. ~Bzzt~')
            }
            break;
    }
})

bot.login(process.env.token);