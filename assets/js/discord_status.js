async function DiscordStatus(opts) {
  if (!opts) throw new Error("Specify an options object");
  if (!opts.userId) throw new Error("Specify a user ID");
  if (!opts.statDotElmId) throw new Error("Specify a status Dot element id");
  if (!opts.statTextElmId) throw new Error("Specify a status Text element id");
  /* Socket */
  if (opts.socket) {
    var socket = opts.socket;
  } else {
    var socket = "false";
  };
  /* Variables */
  const statusDot = document.getElementById(opts.statDotElmId);
  const statusText = document.getElementById(opts.statTextElmId);
  /* Define updateStatus Function */
  function updateStatus(data) {
    //console.log(data.discord_status);
    statusDot.classList = `status ${data.discord_status}`;
    statusText.innerText = `Currently ${data.discord_status}`;
    /*switch (data.discord_status) {
      case "offline":
        statusDot.classList = "status offline";
        statusText.innerText = "Currently ";
        break;
      case "online":
        statusDot.classList = "status online";
        break;
      case "dnd":
        statusDot.classList = "status dnd";
        break;
      case "idle":
        statusDot.classList = "status idle";
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
