const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('') // komut ismi
    .setDescription('') // komut açıklaması
   
    ),
  async execute(interaction) {
    const text = interaction.options.getString('text');
    await interaction.reply(text);
  }
};