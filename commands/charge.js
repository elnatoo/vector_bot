module.exports = {
    name: 'charge',
    description: 'Recharge battery!',
    execute(message, args){
        message.channel.send('Thanks for the recharge! ~BZZT~')
    }
}