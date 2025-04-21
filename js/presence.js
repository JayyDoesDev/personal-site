async function getPresence() {
  try {
    var fetched = await fetch(
      "https://japi.rest/discord/v1/user/419958345487745035"
    );
    var res = await fetched.json();
    var status = res.presence.status;
    var statusIcon = document.getElementsByClassName("status");
    console.log(statusIcon[0].src);
    console.log(status);
    switch (status) {
      case "online":
        statusIcon[0].src = "/img/statuses/online.png";
        break;
      case "idle":
        statusIcon[0].src = "/img/statuses/idle.png";
        break;
      case "dnd":
        statusIcon[0].src = "/img/statuses/dnd.png";
        break;
      case "streaming":
        statusIcon[0].src = "/img/statuses/streaming.png";
        break;
      default:
        statusIcon[0].src = "/img/statuses/offline.png";
    }
  } catch (error) {
    console.error(error);
  }
}

getPresence();
