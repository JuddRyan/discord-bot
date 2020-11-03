const { filter } = require("async");
const discord = require("discord.js");
const { validateURL } = require("ytdl-core");
const ytdl = require("ytdl-core");

module.exports = {
    name: "play",
    description: "playes music",
    async execute(message, args){
        if (!message.member.voice.channel) return message.reply("You need to be connected to a voice channel.");
        // if (message.guild.me.voice.channel) return message.channel.send("The bot is already connected.");
        if (!args[0]) return message.reply("Please add a link with the command.");

        const validate = await ytdl.validateURL(args[0]);
        if (!validate) return message.channel.send("Sorry, please use a valid youtube url.");

        const info = await ytdl.getInfo(args[0]);
        const options = {
            seek: 3,
            volume: 1,
            // added larger dlChunkSize to try and fix randomly stopping songs
            // crashes bot
            // dlChunkSize: 2000000,
        };

        const channelJoin = message.member.voice.channel.join()
            .then(voiceChannel => {
                const stream = ytdl(args[0], {filter: 'audioonly'});
                const dispatcher = voiceChannel.play(stream, options);
            }).catch(console.error);

        // info.title does not work
        message.channel.send(`Playing song.`);
    }
}