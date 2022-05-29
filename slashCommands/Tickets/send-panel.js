module.exports = {
    name: "send-panel",
    usage: '/send-panel <channel>',
    options: [
        {
            name: 'channel',
            description: 'Channel to send ticket panel!',
            type: 'CHANNEL',
            channelTypes: ["GUILD_TEXT"],
            permission: false // Can not use the slash command
        }
    ],
    category: "Tickets",
    description: "Send ticket panel to specific channel!",
    permission: ["ADMINISTRATOR"],
    ownerOnly: true,
    run: async (client, interaction) => {
        const channel = interaction.options.getChannel("channel");

        const row = new client.discord.MessageActionRow()
        .addComponents(
            new client.discord.MessageButton()
            .setStyle("SECONDARY")
            .setLabel('Create A Ticket')
            .setEmoji("952041245910396968")
            .setCustomId("create-ticket"));

    
        const embed = new client.discord.MessageEmbed()
        .setTitle("<:Ticket:979518114213548092> Support Ticket System")
        .setDescription("<:Info:978573342229544970> Support Ticket System:Info: This is the servers support ticket system meant for helping you easily. Opening a support ticket generates a newly created private channel between you and the servers staff. You can tell about/discuss whatever matter it is in that private channel. \n\n — You can open a ticket for the following reasons:\n<:Dot:979515345247301683> Reporting a user.\n<:Dot:979515345247301683> A complaint about the server or any matter / any issue.\n<:Dot:979515345247301683> Any general questions or help.\n<:Dot:979515345247301683> To claim your perks.\n<:Dot:979515345247301683> To sponsor a giveaway.\n<:Dot:979515345247301683> To submit an article/resource you've written or found.\n\n Or any concern or query, etc.\n\n・ After you open a ticket and list your concern or question, staff will try to assist you as soon as possible.\n・ You must behave well and friendly whilst interacting within the ticket channel.\n・ You must provide staff a response within 24-36 hours of them responding to you unless you are not able to.\n・ All server rules apply to the support system as well.\n・To report a staff member, DM someone with the <@&974096709745512468> role. \n\n\n\n**Note:**\n <:Warning:979516769515499520> **Remember** - abusing the support system will result in a punishment. If you open a ticket mistakenly, please say it was a mistake and close it. Don't open a ticket just to see what it does. \n\n\n\n<:Search:979517681470423120> **Read below..**\nFor Discord-related help or queries, please head over to <#979518479260606504>, you won't be helped in a support ticket regarding Discord based questions. <:Cross:979517331334123530>\n\n We are **NOT** run by or affiliated with Discord or any Discord staff/management/executives. For official Discord support, trust & safety, bugs, reports or such, please refer to the button below on this embed.. \n\n\n\n**<:Ticket:979518114213548092> Support Panel**\n *Click on the button below to create a support ticket.*")
        .setColor('#5865F2')

        interaction.reply({ content: `Ticket panel success send to ${channel}!`, ephemeral: true });
        return channel.send({ embeds: [embed], components: [row] });
    }
}