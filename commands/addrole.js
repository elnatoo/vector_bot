module.exports = {
    name: 'addrole',
    description: 'For role assignments!',
    execute(message, args){
        const user = message.mentions.users.first();
        if(message.member.roles.cache.has('806786074511671296')){
            const member = message.guild.member(user);
            if(!args[1]) return message.reply('Specify role.')
            else if(args[1] === 'training'){
                member.roles.add('949505959682781314')
                message.reply(`Successfully added role to ${user.tag}.`)
            }
        }
        else{
            message.channel.send('Nah mate');
        }
    }
}