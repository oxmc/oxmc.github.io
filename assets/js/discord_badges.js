function checkUserBadges(publicFlags) {
    const badges = {
        Discord_Employee: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordstaff.svg", flag: 1 },
        Partnered_Server_Owner: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordpartner.svg", flag: 2 },
        HypeSquad_Events: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hypesquadevents.svg", flag: 4 },
        Bug_Hunter_Level_1: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordbughunter1.svg", flag: 8 },
        House_Bravery: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hypesquadbravery.svg", flag: 64 },
        House_Brilliance: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hypesquadbrilliance.svg", flag: 128 },
        House_Balance: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hypesquadbalance.svg", flag: 256 },
        Early_Supporter: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordearlysupporter.svg", flag: 512 },
        Bug_Hunter_Level_2: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordbughunter2.svg", flag: 16384 },
        Early_Verified_Bot_Developer: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordbotdev.svg", flag: 131072 },
        Active_Developer: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/activedeveloper.svg", flag: 4194304 },
        Discord_Nitro: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordnitro.svg", flag: 8388608 },
        Nitro_Boost_1_Month: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost1.svg", flag: 16777216 },
        Nitro_Boost_2_Month: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost2.svg", flag: 33554432 },
        Nitro_Boost_3_Month: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost3.svg", flag: 67108864 },
        Nitro_Boost_6_Month: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost6.svg", flag: 134217728 },
        Nitro_Boost_9_Month: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost9.svg", flag: 268435456 },
        Nitro_Boost_1_Year: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost10.svg", flag: 536870912 },
        Nitro_Boost_1_Year_3_Months: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost11.svg", flag: 1073741824 },
        Nitro_Boost_1_Year_6_Months: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost12.svg", flag: 2147483648 },
        Nitro_Boost_2_Years: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/boosts/discordboost13.svg", flag: 4294967296 },
        Partnered_Server: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/server/Partnered.svg", flag: 8589934592 },
        Verified_Server: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/server/Verified.svg", flag: 17179869184 },
        Public_Server_Boosted: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/server/CommunityBoosted.svg", flag: 34359738368 },
        Public_Server: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/server/Community.svg", flag: 68719476736 },
        Community_Server_Boosted: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/server/DiscoverableBoosted.svg", flag: 137438953472 },
        Community_Server: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/server/Discoverable.svg", flag: 274877906944 },
        Unverified_Bot: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/special/Bot.png", flag: 549755813888 },
        Clyde_AI: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/special/Ai.png", flag: 1099511627776 },
        Moderator_Programs_Alumni: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordmod.svg", flag: 140737488355328 },
        Discord_Certified_Moderator: { url: "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/olddiscordmod.png", flag: 281474976710656 }
    };

    const badgeData = {};

    for (const badge in badges) {
        const badgeFlag = badges[badge].flag;
        const hasBadge = (publicFlags & badgeFlag) !== 0; // Check if the badge is present and return true/false
        if (hasBadge) {
            badgeData[badge] = {
                name: badge, // Add the name of the badge
                hasBadge: true, // Set to true if the user has the badge
                url: badges[badge].url,
            };
        }
    }

    return JSON.stringify(badgeData);
}