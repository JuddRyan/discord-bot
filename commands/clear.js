module.exports = {
    name: 'clear',
    description: 'Will delete messages in bulk',
    execute(message, args) {
        const value = args.shift();
        // if (value != Number) {
        //     message.channel.send('Give a number.')
        // }

        if (value == NaN){
            message.channel.send('Give a number.')
        }else if (value <= 100) {
            message.channel.bulkDelete(value);
        } else {
            message.channel.send('Can only delete less then 100 messages.');
        }
    }
}