module.exports = {
    name: 'type',
    description: 'Access the type database!',
    execute(message, args, Discord){
        if(!args[1]){
            const mainEmbed = new Discord.MessageEmbed()
            .setcolor('#004D73')
            .setTitle('Pokemon Type Database')
            .setAuthor({name: 'V.E.C.T.O.R.', iconURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png'}
            )
            .setDescription('Welcome to the Pokemon Type Database!')
            .setImage('https://static.wikia.nocookie.net/pokemon/images/8/8c/PokemonTypes.png/revision/latest?cb=20170417193722')
            .setFooter('Please select a type.')

            message.channel.send(mainEmbed)
        }
        if(args[1] === 'electric'){
            const electricEmbed = new Discord.MessageEmbed()
            .setcolor('#FFED00')
            .setTitle('Electric')
            .setDescription('')
            .addFields(
                {name: 'Super-effective against', value: 'Water and Flying'},
                {name: 'Not very effective against', value: 'Grass, Electric, and Dragon'},
                {name: 'Ineffective against', value: 'Ground'},
                {name: 'Resistances', value: 'Electric, Flying, and Steel'},
                {name: 'Weaknesses', value: 'Ground'},
                {name: 'Immunities', value: 'None'}
            )
            //.setImage('')
            .setFooter('Accessed Database for type: Electric.')

            message.channel.send(electricEmbed)
        }
        else if(args[1] === 'steel'){
            const steelEmbed = new Discord.MessageEmbed()
            .setcolor('#FFED00')
            .setTitle('Electric')
            .setDescription('')
            .addFields(
                {name: 'Super-effective against', value: 'Water and Flying'},
                {name: 'Not very effective against', value: 'Grass, Electric, and Dragon'},
                {name: 'Ineffective against', value: 'Ground'},
                {name: 'Resistances', value: 'Electric, Flying, and Steel'},
                {name: 'Weaknesses', value: 'Ground'},
                {name: 'Immunities', value: 'None'}
            )
            //.setImage('')
            .setFooter('Accessed Database for type: Electric.')

            message.channel.send(steelEmbed)
            
            // message.channel.send('Effective against Rock, Fairy, and Ice types!')
            // message.channel.send('Watch out for Fire, Ground, and Fighting types!')
            // message.channel.send('Immune to Poison type-moves!')
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
        else if(args[1] === 'sound'){
            message.channel.send('As if GameFreak were cool enough to implement that!')
        }
        else if(args[1] === 'light'){
            message.channel.send('As if GameFreak were cool enough to implement that!')
        }
        else if(args[1] === 'cyber'){
            message.channel.send('As if GameFreak were cool enough to implement that!')
        }
        else{
            message.channel.send('ERR 462: No records found of ${args[1]} in Pokemon Type Database. ~Bzzt~')
        }
    }
}