const DiscordInfo = {
    id: '1079881924769755196',
    socket: true,
    showActivity: false
};

var DiscordProfileType;

(async () => {
    /* Get user data */
    const user_data = await (await fetch(`https://api.lanyard.rest/v1/users/${DiscordInfo.id}`)).json();

    /* Get pfp */
    const pfp = `https://cdn.discordapp.com/avatars/${DiscordInfo.id}/${user_data.data.discord_user.avatar}`;
    document.getElementById("pfp").src = `${pfp}.jpeg?size=4096`;

    /* Discord profile */
    /*function DiscordProfile() {
        if (window.innerWidth >= 768) {
            DiscordProfileType = 1;
            return `
            <div class="profile">
              <div class="pro-header">
                <div class="pro-avatar">
                  <img alt="avatar-username"
                    src="./assets/img/placeholder_pfp.png" id="pfp">
                  <span class="pro-status">
                    <i id="Discord_Status" class="fas fa-circle status offline"></i>
                  </span>
                </div>
                <div class="pro-username">
                  <span class="text-username">oxmc7769</span>
                </div>
              </div>
              <div class="pro-body">
                <div class="pro-content">
                  <div class="title-body" id="Discord_Status_Text">Currently Offline</div>
                  <!--<div class="roles-body">
                    <div class="rol green">
                      <i class="fas fa-circle"></i>
                      <span>Admin</span>
                    </div>
                    <div class="rol red">
                      <i class="fas fa-circle"></i>
                      <span>Mod</span>
                    </div>
                    <div class="rol blue">
                      <i class="fas fa-circle"></i>
                      <span>Member</span>
                    </div>
                    <div class="rol yellow">
                      <i class="fas fa-circle"></i>
                      <span>Dev</span>
                    </div>
                  </div>-->
                </div>
              </div>
            </div>`;
        } else {
            DiscordProfileType = 2;
            return `
            <img class="main_pfp" src="./assets/img/placeholder_pfp.png" alt="My Profile Picture" id="pfp">
      <div class="main_pfp-status">
        <p id="Discord_Status_Text">Currently Offline</p>
        <div class="status-dot-wrapper">
          <div id="Discord_Status" class="status icon offline" title="My Discord Status"></div>
        </div>
      </div>`;
        }
    }*/

    /*document.getElementById("userinfo").innerHTML = DiscordProfile();
    window.addEventListener("resize", function () {
        DisplayDiscordInfo();
    });*/

    /* Get flags */
    const userPublicFlags = user_data.data.discord_user.public_flags;
    const badgeData = JSON.parse(checkUserBadges(userPublicFlags));

    /* Loop through the badgeData object and print badge info only if the user has it */
    /*for (const badge in badgeData) {
        if (badgeData[badge].hasBadge) {
            console.log(`Badge Name: ${badge}`);
            console.log(`Has Badge: ${badgeData[badge].hasBadge}`);
            console.log(`Badge URL: ${badgeData[badge].url}`);
        }
    }*/

    /* Get Status */
    DiscordStatus({ userId: DiscordInfo.id, statDotElmId: "Discord_Status", statTextElmId: "Discord_Status_Text", socket: DiscordInfo.socket, showActivity: DiscordInfo.showActivity });
})();