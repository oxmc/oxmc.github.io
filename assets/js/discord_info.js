const DiscordInfo = {
  id: '1079881924769755196',
  socket: true,
  showActivity: false
};

(async () => {
  iziToast.show({
    id: 'discord-status-fetch-message',
    theme: 'dark',
    displayMode: 2,
    layout: 2,
    image: './assets/img/discord-logo-blurple-rounded.png',
    imageWidth: 70,
    timeout: 2000,
    title: 'Fetching Discord status',
    message: `Attempting to fetch discord status`,
    position: 'bottomLeft',
    transitionIn: 'flipInX',
    transitionOut: 'flipOutX',
    progressBarColor: 'rgb(0, 255, 184)'
  });

  /* Get user data */
  axios.get(`https://api.lanyard.rest/v1/users/${DiscordInfo.id}`).then((user_data) => {
    user_data = user_data.data
    /* Get pfp */
    const pfp = `https://cdn.discordapp.com/avatars/${DiscordInfo.id}/${user_data.data.discord_user.avatar}`;
    if (user_data.data.discord_user.avatar.startsWith("a_")) {
      document.getElementById("pfp").src = `${pfp}.gif`;
    } else {
      document.getElementById("pfp").src = `${pfp}.jpeg?size=4096`;
    }

    /* Get flags */
    const userPublicFlags = user_data.data.discord_user.public_flags;
    //const badgeData = JSON.parse(checkUserBadges(userPublicFlags));

    /* Loop through the badgeData object and print badge info only if the user has it */
    //for (const badge in badgeData) {
    //  if (badgeData[badge].hasBadge) {
    //    console.log(`Badge Name: ${badge}\nHas Badge: ${badgeData[badge].hasBadge}\nBadge URL: ${badgeData[badge].url}`);
    //  }
    //}
  }).catch((error) => {
    console.log("Error Fetching discord info:", error);
    iziToast.show({
      id: 'discord-status-fetch-message',
      theme: 'dark',
      displayMode: 2,
      layout: 2,
      image: './assets/img/discord-logo-blurple-rounded.png',
      imageWidth: 70,
      title: 'Error Fetching Discord status',
      message: `An error accured while fetching discord status`,
      position: 'bottomLeft',
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      progressBarColor: 'rgb(0, 255, 184)'
    });
  });

  /* Get Status */
  DiscordStatus({ userId: DiscordInfo.id, statDotElmId: "Discord_Status", statTextElmId: "Discord_Status_Text", socket: DiscordInfo.socket, showActivity: DiscordInfo.showActivity });
})();