// This command currently doesn't work

module.exports = {
    name: "autoRole",
    description: "auto join a role",
    execute(msg) {
      msg.channel.send("Select a role you want to join").then((question) => {
        question.react("🎮");
  
        const filter = (reaction, user) => {
          return ["🎮"].includes(reaction.emoji.name) && !user.bot;
        };
  
        const collector = question.createReactionCollector(filter, {
          max: 1,
          //time: 15000,
        });
  
        let userReaction = collecter.emoji.name;
        
        
        // collector.on("end", (collected, reason) => {
        //   if (reason === "time") {
        //     msg.reply("Ran out of time ☹...");
        //   } else {
        //     let userReaction = collected.array()[0];
        //     let emoji = userReaction._emoji.name;
  
        //     if (emoji === "👍") {
        //       msg.reply("Glad your reaction is 👍!");
        //     } else if (emoji === "👎") {
        //       msg.reply("Sorry your reaction is 👎");
        //     } else {
        //       msg.reply(`I dont understand ${emoji}...`);
        //     }
        //   }
        // });

      });
    },
  };
  