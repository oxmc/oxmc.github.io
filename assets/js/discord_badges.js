function checkUserBadges(publicFlags, opts = {}) {
    const asset_url_base = "https://raw.githubusercontent.com/mezotv/discord-badges/main/assets";
    const badges = {
        Discord_Employee: { url: `${asset_url_base}/discordstaff.svg`, flag: 1 },
        Partnered_Server_Owner: { url: `${asset_url_base}/discordpartner.svg`, flag: 2 },
        HypeSquad_Events: { url: `${asset_url_base}/hypesquadevents.svg`, flag: 4 },
        Bug_Hunter_Level_1: { url: `${asset_url_base}/discordbughunter1.svg`, flag: 8 },
        House_Bravery: { url: `${asset_url_base}/hypesquadbravery.svg`, flag: 64 },
        House_Brilliance: { url: `${asset_url_base}/hypesquadbrilliance.svg`, flag: 128 },
        House_Balance: { url: `${asset_url_base}/hypesquadbalance.svg`, flag: 256 },
        Early_Supporter: { url: `${asset_url_base}/discordearlysupporter.svg`, flag: 512 },
        Bug_Hunter_Level_2: { url: `${asset_url_base}/discordbughunter2.svg`, flag: 16384 },
        Early_Verified_Bot_Developer: { url: `${asset_url_base}/discordbotdev.svg`, flag: 131072 },
        Active_Developer: { url: `${asset_url_base}/activedeveloper.svg`, flag: 4194304 },
        Discord_Nitro: { url: `${asset_url_base}/discordnitro.svg`, flag: 8388608 },
        Nitro_Boost_1_Month: { url: `${asset_url_base}/boosts/discordboost1.svg`, flag: 16777216 },
        Nitro_Boost_2_Month: { url: `${asset_url_base}/boosts/discordboost2.svg`, flag: 33554432 },
        Nitro_Boost_3_Month: { url: `${asset_url_base}/boosts/discordboost3.svg`, flag: 67108864 },
        Nitro_Boost_6_Month: { url: `${asset_url_base}/boosts/discordboost6.svg`, flag: 134217728 },
        Nitro_Boost_9_Month: { url: `${asset_url_base}/boosts/discordboost9.svg`, flag: 268435456 },
        Nitro_Boost_1_Year: { url: `${asset_url_base}/boosts/discordboost10.svg`, flag: 536870912 },
        Nitro_Boost_1_Year_3_Months: { url: `${asset_url_base}/boosts/discordboost11.svg`, flag: 1073741824 },
        Nitro_Boost_1_Year_6_Months: { url: `${asset_url_base}/boosts/discordboost12.svg`, flag: 2147483648 },
        Nitro_Boost_2_Years: { url: `${asset_url_base}/boosts/discordboost13.svg`, flag: 4294967296 },
        Partnered_Server: { url: `${asset_url_base}/server/Partnered.svg`, flag: 8589934592 },
        Verified_Server: { url: `${asset_url_base}/server/Verified.svg`, flag: 17179869184 },
        Public_Server_Boosted: { url: `${asset_url_base}/server/CommunityBoosted.svg`, flag: 34359738368 },
        Public_Server: { url: `${asset_url_base}/server/Community.svg`, flag: 68719476736 },
        Community_Server_Boosted: { url: `${asset_url_base}/server/DiscoverableBoosted.svg`, flag: 137438953472 },
        Community_Server: { url: `${asset_url_base}/server/Discoverable.svg`, flag: 274877906944 },
        Unverified_Bot: { url: `${asset_url_base}/special/Bot.png`, flag: 549755813888 },
        Clyde_AI: { url: `${asset_url_base}/special/Ai.png`, flag: 1099511627776 },
        Moderator_Programs_Alumni: { url: `${asset_url_base}/discordmod.svg`, flag: 140737488355328 },
        Discord_Certified_Moderator: { url: `${asset_url_base}/olddiscordmod.png`, flag: 281474976710656 }
    };

    const badgeData = {};

    // Options
    let showHas = false;
    if (opts.showHas === true) {
        showHas = true;
    }

    for (const badge in badges) {
        const badgeFlag = badges[badge].flag;
        const hasBadge = (publicFlags & badgeFlag) !== 0; // Check if the badge is present and return true/false

        /* If user set showHas to true then only show the badges they have */
        if (showHas === true) {
            if (hasBadge) {
                badgeData[badge] = {
                    name: badge,
                    url: badges[badge].url
                };
            }
        } else {
            badgeData[badge] = {
                name: badge,
                hasBadge: hasBadge, // So user can check if they have that badge
                url: badges[badge].url
            };
        }

    }

    return JSON.stringify(badgeData);
}