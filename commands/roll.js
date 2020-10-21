module.exports = {
    name: 'roll',
    description: 'Roll',
    execute(message, args){
        if (args.typeOf() == Number) {
            const value = Math.round(Math.random()*args);
            message.reply(`you rolled ${value}`);
        } else if (args.typeOf != Number) {
            message.channel.send('Give a number')
        }    else { 
            const value = Math.round(Math.random()*100);
        }
    }
}