module.exports = {
    name: 'spam',
    description: 'places text vertically',
    execute(message, args) {
        let value = args.shift();
        let spam = "";
        for (i = 0; i < value.length; i++) {
            spam += value[i] + "\n"
        }
        
        message.channel.send(spam);
    }
}