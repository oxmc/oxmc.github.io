const DiscordInfo = {
    id: '1079881924769755196',
    socket: true
};

(async () => {
    /* Get user data */
    const user_data = await (await fetch(`${CONSTANTS.API_URL}/users/${DiscordInfo.id}`)).json();

    /* Get pfp */
    const pfp = `https://cdn.discordapp.com/avatars/${DiscordInfo.id}/${user_data.data.discord_user.avatar}.jpeg`;
    document.getElementById("pfp").src = `${pfp}?size=4096`;

    /* Get Status */
    DiscordStatus({ userId: DiscordInfo.id, statDotElmId: "Discord_Status", statTextElmId: "Discord_Status_Text", socket: DiscordInfo.socket });
})();