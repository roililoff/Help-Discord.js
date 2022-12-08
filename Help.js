const Discord = require('discord.js')
 
module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
            .setTitle('Help')
            .setTitle('» You need help ?')
            .setDescription('')
            .setColor('RED')
            .addField(':tada: Command Fun »', '.fun')
            .addField(':ghost: Command Moderator »', '.mod')
            .addField(':sparkles: Command Tools »', '.tools ⟦soon⟧')
            .addField(':bar_chart: AddBot »', '.link')
            .addField(':eyes: The latest update »', '**1 Day**, **1.0.0**')
            .setAuthor('')
            .setImage('')
            .setThumbnail('')
            .setFooter('AndaBot .help » .link')
            .setTimestamp()
            .setURL(''))
    },
    name: 'help'
}
