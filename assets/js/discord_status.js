async function DiscordStatus(opts) {
  if (!opts) throw new Error("Specify an options object");
  if (!opts.userId) throw new Error("Specify a user ID");
  if (!opts.statDotElmId) throw new Error("Specify a status Dot element id");
  if (!opts.statTextElmId) throw new Error("Specify a status Text element id");
  var socket, cssclass;
  /* Socket */
  if (opts.socket) {
    socket = opts.socket;
  } else {
    socket = "false";
  };
  /* Custom CSS Class Prefix */
  if (opts.statCssPrefix && opts.statCssPrefix != null) {
    cssclass = opts.statCssPrefix;
  } else {
    cssclass = "status icon bg";
  };
  /* Variables */
  const statusDot = document.getElementById(opts.statDotElmId);
  const statusText = document.getElementById(opts.statTextElmId);
  /* Define updateStatus Function */
  function updateStatus(data) {
    //console.log(data.discord_status);
    statusDot.classList = `${cssclass} ${data.discord_status}`;
    statusText.innerText = `Currently ${data.discord_status}`;
    /*switch (data.discord_status) {
      case "offline":
        statusDot.classList = "status offline";
        statusText.innerText = "Currently Offline";
        break;
      case "online":
        statusDot.classList = "status online";
        statusText.innerText = "Currently Online";
        break;
      case "dnd":
        statusDot.classList = "status dnd";
        statusText.innerText = "Currently Dnd";
        break;
      case "idle":
        statusDot.classList = "status idle";
        statusText.innerText = "Currently Idle";
        break;
    };*/
  };
  /* Get Status */
  if (socket == true) {
    lanyard({
      userId: opts.userId,
      socket: true,
      onPresenceUpdate: updateStatus
    });
  } else {
    lanyard({
      userId: opts.userId,
      socket: socket
    }).then(updateStatus);
  };
}
