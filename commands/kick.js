module.exports = {
    name: 'kick',
    description: 'Yer walking the plank, matey!',
    execute(message, args){
        const user = message.mentions.users.first();
        if(message.member.roles.cache.has('806786074511671296')){
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
        }
        else{
            message.channel.send('Nah mate');
        }
    }
}