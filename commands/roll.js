module.exports = {
    name: 'roll',
    description: 'Roll',
    execute(message, args){

        let value = 5;

        if (args == undefined) {
            value = Math.round(Math.random() * 100);
        } else {
            value = Math.round(Math.random() * args);
        }

        message.reply(value);
    }
}