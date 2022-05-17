module.exports = {
    name: 'payrespects',
    description: 'Pay your respects!',
    execute(message, args){
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
    }
}