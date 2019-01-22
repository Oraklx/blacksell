const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let botembed = new Discord.RichEmbed()
  .setTitle("Carte Cadeau Netflix Reward:")
  .setColor("#15f153")
  .addField("30 invites", "1 code", true)
  .addField("60 invites ", "2 codes", true)
  .addField("90 invites ", "3 codes", true)
  .setFooter("Pour avoir votre reward, merci de vous rendres sur ce lien : http://dapalan.com/NDL0");

  message.channel.send(botembed);
}

module.exports.help = {
  name:"cart"
}
