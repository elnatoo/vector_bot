module.exports = {
    name: 'robotalk',
    description: 'Robot languages!',
    execute(message, args){
        if(!args[1]){
            message.channel.send('beep boop bop')
        }
        else if(args[1] === 'leet'){
            message.channel.send('b33p b00p b0p')
        }
        else {
            message.channel.send('BEEP BEEP')
        }
    }
}