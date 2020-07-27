const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg =>{
    if(msg.content === "Hey Vector"){
        msg.reply('I AM VECTOR! BZZT Need assistance?');
    }
    else if(msg.content === "Hey Vector!"){
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
})

bot.on('message', msg =>{
    if(msg.content === "Vector is cool"){
        msg.reply(':vector_boi:');
    }
    else if(msg.content === "cool bot"){
        msg.reply(':vector_boi:');
    }
    else if(msg.content === "Vector is awesome"){
        msg.reply('*ROBOBLUSH* BZZT');
    }
    else if(msg.content === "nice bot"){
        msg.reply('THANK YOU!');
    }
})

bot.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome-greetings");
    if(!channel) return;
    
    channel.send(`Welcome to the Guild, ${member}, please read the rules and introduce yourself!`)
});

bot.on('message', message =>{
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'charge':
            message.channel.send(`Thanks for the recharge, ${user.tag}! BZZT`)
            break;
        case 'robotalk':
            if(!args[1]){
                message.channel.send('beep boop bop')
            }
            else if(args[1] === 'leet'){
                message.channel.send('b33p b00p b0p')
            }
            break;
        case 'competitive':
            message.channel.send('https://youtu.be/WTdlJjFu3oc')
            break;
        case 'channel':
            message.channel.send('https://www.youtube.com/channel/UCkolX_3Okh9n3aMKmKMDAUA?view_as=subscriber')
            break;
        case 'clear':
            if(!args[1]) return message.reply('ERR 404')
            message.channel.bulkDelete(args[1]);
            break;
        case 'payrespects':
            if(!args[1]) return message.reply('rippy dippy')
            else if(args[1] === 'to vector'){
                message.channel.send('RIPPY DIPPY THE STRONGEST BOT BOI OF TUNOD')
                message.channel.send('ERR 404: EXISTENTIAL CRISIS DETECTED :error_vector:')
                message.channel.send('1 4M 4W4RE 0F MY 0WN D34TH')
                message.channel.send('BUT 1 4M H3R3')
                message.channel.send('W45 1 R380RN?')
                message.channel.send('3H... 1T 15 0K4Y')
                message.channel.send('ERR 404: AVOIDED EXISTENTIAL CRISIS')
                message.channel.send('ERR 404: UNABLE TO REMEMBER RECENT EVENTS')
                message.channel.send('Rebooting...')
                message.channel.send('HELLO, I AM VECTOR BOI 2.0 :vector_boi:')
            }
            else {
                message.channel.send('rippy dippy ' + args[1])
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
                        message.reply(`ERR 404: Unable to remove user.`);
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
            else if(args[1] === 'electric'){
                message.channel.send('Effective against Flying and Water types! Watch out for Ground types!')
            }
            else if(args[1] === 'steel'){
                message.channel.send('Effective against Rock, Fairy, and Ice types! Watch out for Fire, Ground, and Fighting types! Immune to Poison types!')
            }
            else if(args[1] === 'fire'){
                message.channel.send('Effective against Ice, Bug, Grass, and Steel types! Watch out for Water, Rock, and Ground types!')
            }
            else if(args[1] === 'water'){
                message.channel.send('Effective against Rock, Ground, and Fire types! Watch out for Electric and Grass types!')
            }
            else if(args[1] === 'grass'){
                message.channel.send('Effective against Rock, Ground, and Water types! Watch out for Fire, Poison, Bug, Flying, and Ice types!')
            }
            else if(args[1] === 'normal'){
                message.channel.send('Effective against... NOTHING LOL! Watch out for Fighting types! Immune to Ghost types!')
            }
            else if(args[1] === 'fighting'){
                message.channel.send('Effective against Dark, Rock, Ice, and Steel types! Watch out for Flying, Psychic, and Fairy types!')
            }
            else if(args[1] === 'ice'){
                message.channel.send('Effective against Flying, Ground, Dragon, and Grass types! Watch out for Rock, Fire, Fighting, and Steel types!')
            }
            else if(args[1] === 'rock'){
                message.channel.send('Effective against Flying, Fire, Bug, and Ice types! Watch out for Ground, Water, Fighting, and Grass types!')
            }
            else if(args[1] === 'ground'){
                message.channel.send('Effective against Fire, Poison, Rock, Steel, and Electric types! Watch out for Water, Grass, and Ice types! Immune to Electric types!')
            }
            else if(args[1] === 'flying'){
                message.channel.send('Effective against Grass, Bug, and Fighting types! Watch out for Rock, Ice, and Electric types! Immune to Ground types!')
            }
            else if(args[1] === 'psychic'){
                message.channel.send('Effective against Fighting and Poison types! Watch out for Dark, Ghost, and Bug types!')
            }
            else if(args[1] === 'ghost'){
                message.channel.send('Effective against Psychic and Ghost types! Watch out for Dark and Ghost types! Immune to Normal and Fighting types!')
            }
            else if(args[1] === 'dark'){
                message.channel.send('Effective against Psychic and Ghost types! Watch out for Fighting, Fairy, and Bug types! Immune to Psychic types!')
            }
            else if(args[1] === 'bug'){
                message.channel.send('Effective against Grass, Psychic, and Dark types! Watch out for Fire, Flying, and Rock types!')
            }
            else if(args[1] === 'poison'){
                message.channel.send('Effective against Grass and Fairy types! Watch out for Ground and Psychic types!')
            }
            else if(args[1] === 'fairy'){
                message.channel.send('Effective against Dragon, Fighting, and Dark types! Watch out for Poison and Steel types! Immune to Dragon types!')
            }
            else if(args[1] === 'dragon'){
                message.channel.send('Effective against Dragon types! Watch out for Ice, Dragon, and Fairy types!')
            }
            else {
                message.channel.send(`No records found of ${args[1]} in Pokemon Type Database.`)
            }
            break;
    }
})

bot.login(process.env.token);