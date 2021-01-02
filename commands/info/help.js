const discord = require("discord.js");

module.exports = {
  name: "help",
  run: async (client, message, args) => {
    const embed = new discord.MessageEmbed()

      .setTitle(`${client.user.username} HELP MENU`)

      .setThumbnail(
        message.author.displayAvatarURL({ dynamic: true, size: 1024 })
      )

      .setDescription(
        `

**MUSIC COMMANDS**
\`__**MODERATION**__ 🌸
`.kick,warn,ban,unban,purge,lock,unlock,mute,unmute,changenick,nuke,giverole`

🌸__**INFO**__
`serverinfo,userinfo,serverstats,calendar`

🌸 __**ECONOMY**__ 🌸
`bal,dep,withdraw,hunt,crime,beg,heist,rob,daily,weekly`
```meme,search,emoji,kill,kiss,shoot,hack cry,hug,nitro,bully pat,cat,```

🌸 __**TICKET**__ 🌸
`.ticket - (creat a ticket)
.c ticket - (close the ticket)`

🌸 __**MUSIC**__ 🌸
`.play | .pause |.stop

🌸 __**BOT INFO**__ 🌸
`.botinfo,.bugreport,.freepremium,.inv,`
[**INVITE ME**](https://discord.com/oauth2/authorize?client_id=781774443859935242&scope=bot&permissions=2147483647)]
$footer[use . before all commands example .help
      )
      .setFooter(message.guild);
    message.channel.send(embed);
  }
};
