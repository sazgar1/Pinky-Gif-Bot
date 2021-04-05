const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "";

client.on("ready", () => {
  console.log('');
  console.log('By Pinky');/////Pinky 
console.log('');
console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`${prefix}help | ${client.guilds.size} Guilds`)///////Write something
 client.user.setStatus("online")/////Write it down with your own heart
  console.log(`Logined`)
})

client.on("message", message => {
  if (message.content.startsWith(prefix + "boy", "Boy")) {
    let boy = [
      "https://media.discordapp.net/attachments/786897044483604490/803870769313480714/Enes_Acar_GIF_70.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870793716858880/a_57a7f6c875e3a329b170edf177392911.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870817351368734/5-2.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829010513966/image1.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804007829483552838/image3.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804219672513478706/Lenora_36.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220384899498064/Lenora_28.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804220394697392158/Lenora_33.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804315371271749662/image0-20.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968359572930580/ALANIS_MAN_GIF_156.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804968381816111124/image0-5.gif",
      "https://media.discordapp.net/attachments/786897044483604490/804760463044640808/ALANIS_MAN_GIF_99.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870704999202836/ENES_ACAR_GIF_104.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870737941135421/ENES_ACAR_GIF_15.gif",
      "https://media.discordapp.net/attachments/786897044483604490/803870682479067166/ENES_ACAR_GIF_135.gif"
    ];

    message.channel
      .send({
        embed: {
          description: `${message.author.username} BOY GIFS  `,
          image: {
            url: boy[Math.floor(Math.random() * boy.length)]
          }
        }
      })
      .catch(e => {
        client.log.error(e);
      });
  }
});
