module.exports = {
    name: 'plug',
    description: 'Support content creators!',
    execute(message, args){
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
        else if(args[1] === 'nerf'){
            message.channel.send('Twitch: https://www.twitch.tv/darthnerf')
        }
        else {
            message.channel.send('no')
        }
    }
}